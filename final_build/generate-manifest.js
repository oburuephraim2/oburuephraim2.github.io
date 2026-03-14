#!/usr/bin/env node
/**
 * Generate Projects Manifest
 * 
 * This script scans the current directory for project folders
 * and generates a projects-manifest.json file.
 * 
 * Usage: node generate-manifest.js
 */

const fs = require('fs');
const path = require('path');

function generateManifest() {
    const currentDir = __dirname;
    const projects = [];

    // Get all directories in the current folder
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    items.forEach(item => {
        // Skip hidden files, node_modules, and known non-project files
        if (item.name.startsWith('.') || 
            item.name === 'node_modules' ||
            item.name === 'showcase projects page.html' ||
            item.name === 'index.html' ||
            item.name === 'index_beta.html' ||
            item.name === 'README.md' ||
            item.name === 'projects-manifest.json' ||
            item.name === 'generate-manifest.js' ||
            item.name === 'generate-manifest.py' ||
            !item.isDirectory()) {
            return;
        }

        const folderPath = item.name;
        const indexPath = path.join(currentDir, folderPath, 'index.html');

        // Check if index.html exists in the folder
        if (fs.existsSync(indexPath)) {
            // Get file stats for creation date
            const stats = fs.statSync(indexPath);
            
            projects.push({
                name: item.name.replace(/[-_]/g, ' '),
                description: `Project in ${item.name} folder`,
                folderPath: item.name,
                pagePath: 'index.html',
                icon: '🎨',
                createdDate: stats.birthtime.toISOString()
            });

            console.log(`✓ Found project: ${item.name}`);
        }
    });

    // Sort by creation date (newest first)
    projects.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

    // Create manifest
    const manifest = { projects };

    // Write to file
    const manifestPath = path.join(currentDir, 'projects-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(`\n✓ Manifest generated: projects-manifest.json`);
    console.log(`✓ Total projects found: ${projects.length}`);
    console.log(`\nYou can now open showcase projects page.html to view your projects!`);
}

try {
    generateManifest();
} catch (err) {
    console.error('Error generating manifest:', err.message);
    process.exit(1);
}
