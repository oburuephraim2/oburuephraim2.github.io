#!/usr/bin/env python3
"""
Generate Projects Manifest

This script scans the current directory for project folders
and generates a projects-manifest.json file.

Usage: python generate-manifest.py
"""

import os
import json
from pathlib import Path
from datetime import datetime

def generate_manifest():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    projects = []

    # Get all directories in the current folder
    for item in os.listdir(current_dir):
        item_path = os.path.join(current_dir, item)

        # Skip hidden files, known non-project files
        if (item.startswith('.') or
            item == 'node_modules' or
            item == '__pycache__' or
            item in ['showcase projects page.html', 'index.html', 'index_beta.html', 
                    'README.md', 'projects-manifest.json', 
                    'generate-manifest.js', 'generate-manifest.py'] or
            not os.path.isdir(item_path)):
            continue

        folder_path = item
        index_path = os.path.join(item_path, 'index.html')

        # Check if index.html exists in the folder
        if os.path.exists(index_path):
            # Get file creation date
            stat_info = os.stat(index_path)
            created_date = datetime.fromtimestamp(stat_info.st_ctime).isoformat() + 'Z'

            projects.append({
                'name': item.replace('-', ' ').replace('_', ' '),
                'description': f'Project in {item} folder',
                'folderPath': item,
                'pagePath': 'index.html',
                'icon': '🎨',
                'createdDate': created_date
            })

            print(f'✓ Found project: {item}')

    # Sort by creation date (newest first)
    projects.sort(key=lambda x: x['createdDate'], reverse=True)

    # Create manifest
    manifest = {'projects': projects}

    # Write to file
    manifest_path = os.path.join(current_dir, 'projects-manifest.json')
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f'\n✓ Manifest generated: projects-manifest.json')
    print(f'✓ Total projects found: {len(projects)}')
    print(f'\nYou can now open showcase projects page.html to view your projects!')

if __name__ == '__main__':
    try:
        generate_manifest()
    except Exception as e:
        print(f'Error generating manifest: {str(e)}')
        exit(1)
