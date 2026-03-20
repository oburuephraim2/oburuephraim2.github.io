# Multi-Topic Optional Quiz Training System

## Overview
This is a professional remote training platform that allows learners to:
- **Browse study material freely** across multiple topics organized in modules
- **Optionally take quizzes** for any topic they choose
- **Get graded only on quizzes they attempt** (not required to take all quizzes)
- **Earn certificates** based on their average quiz score

## Key Features

### 1. **Flexible Learning Path**
- Sidebar navigation with collapsible module structure
- Jump to any topic immediately (non-linear learning)
- Study material is always accessible without completing quizzes first

### 2. **Optional Quizzes**
- Each topic can have associated quiz questions
- Users choose which quizzes to attempt
- Can retake quizzes unlimited times
- Supports both single-choice (radio) and multiple-choice (checkbox) questions
- Partial credit for multiple-choice (proportional to correct selections)

### 3. **Smart Grading**
- **Final score = Average of all attempted quizzes**
- No penalty for not attempting quizzes
- No minimum number of quizzes required to be eligible (configurable)
- Pass when average score ≥ `passingScore`

### 4. **Progress Tracking**
- Visual indicators in sidebar (✓ = attempted, ○ = not attempted)
- "View Progress" button shows overall certification status
- Quiz history persists across browser sessions
- Breakdown of all attempted quizzes with individual scores

### 5. **Certificate Generation**
- Download certificate as PNG image
- Includes name, course title, overall score, quizzes completed, and date
- Automatically generated after viewing certification progress

### 6. **Admin Panel**
- Password-protected (default: `E@ss1234`)
- Load custom course JSON files
- Reset to default course
- File persistence using browser localStorage

---

## Course Data Structure

### JSON Format

```json
{
  "courseMetadata": {
    "title": "Course Name",
    "version": "v1.0",
    "passingScore": 70
  },
  "modules": [
    {
      "id": "m1",
      "title": "Module 1 Title",
      "topics": [
        {
          "id": "t1",
          "topic": "Topic Name",
          "content": "Study material text goes here...",
          "questions": [
            {
              "id": 1,
              "type": "single",
              "text": "Question text?",
              "options": ["Option A", "Option B", "Option C"],
              "correct": [0],
              "points": 1,
              "feedback": "Explanation shown after submission."
            }
          ]
        }
      ]
    }
  ]
}
```

### Field Descriptions

#### `courseMetadata`
- **title** (string): Course display name
- **version** (string): Course version identifier
- **passingScore** (number): Percentage needed to pass (0-100)

#### `modules` (array)
- **id** (string): Unique module identifier
- **title** (string): Module display name
- **topics** (array): Array of topic objects

#### `topics` (array)
- **id** (string): Unique topic identifier (used for tracking quiz attempts)
- **topic** (string): Topic display name
- **content** (string): Study material text (supports plain text and HTML)
- **questions** (array): Array of quiz questions for this topic

#### `questions` (array)
- **id** (number): Question unique identifier
- **type** (string): Either `"single"` (radio buttons) or `"multiple"` (checkboxes)
- **text** (string): Question prompt
- **options** (array): Array of answer choices (strings)
- **correct** (array): Array of indices (0-based) of correct options
  - For `"single"`: `[0]` means first option is correct
  - For `"multiple"`: `[0, 2, 4]` means 1st, 3rd, and 5th options are correct
- **points** (number): Points awarded for complete correct answer
- **feedback** (string): Explanation shown after quiz submission

---

## How Users Use It

### Learning Flow
1. **Load Course** → System displays sidebar with all modules/topics
2. **Select Topic** → Main content shows study material
3. **Read Material** → No quiz required to proceed
4. **Optional Quiz** → "Start Topic Quiz" button appears below material
5. **Submit Quiz** → Get immediate score and feedback
6. **View Progress** → Click "📊 View Progress" button to see overall stats
7. **Retake Quizzes** → Can retake any quiz unlimited times
8. **Download Certificate** → Available when average score meets passing requirement

### Navigation
- **Sidebar**: Browse all available topics
- **View Progress**: See certification status overview
- **Retake**: Reset quiz and answer again

---

## Grading System

### Scoring Rules

**Single-choice questions (type: "single")**
- Correct: Full points
- Incorrect or unanswered: 0 points

**Multiple-choice questions (type: "multiple")**
- Partial credit system:
  - Award = (Correct Answers Selected / Total Correct Answers) × Points
  - No negative points if user selects wrong answers
- Example: If question has 3 correct answers and awards 3 points:
  - User selects 2 correct: 2/3 × 3 = 2 points
  - User selects 1 correct + 1 wrong: 1/3 × 3 = 1 point

**Overall Score**
- = Average of all quiz scores attempted
- Example: User takes 3 quizzes with scores 80%, 90%, 70%
  - Overall = (80 + 90 + 70) / 3 = 80%

**Certification**
- User is certified if: Overall Score ≥ passingScore
- No minimum number of quizzes required

---

## Data Persistence

### Browser Storage (localStorage)
- **loadedCourseData**: Saves custom course JSON
- **quizAttempts**: Saves quiz scores and completion timestamps

### Persistence Behavior
- Reload page → All course and quiz data preserved
- Reset to Default → Clears all saved data and loads built-in course
- New Course Upload → Replaces previous course and clears quiz history

---

## Creating Your Own Course

### Step-by-Step

1. **Create a JSON file** matching the structure above
2. **Test locally** in a text editor (validate JSON syntax)
3. **Open index.html** in browser
4. **Click "🔧 ADMIN"** and enter password: `E@ss1234`
5. **Select your JSON file** using the file input
6. **Verify** course loads correctly with all modules/topics/questions

### Example Topics to Include
- **Content**: Clear, focused learning material
- **Questions**: Mix of single and multiple-choice
- **Feedback**: Detailed explanations for learning
- **Points**: Appropriate weighting (1-3 points per question recommended)
- **Passing Score**: 60-80% is typical for professional training

---

## Customization

### Change Admin Password
Edit the JavaScript line:
```javascript
if (entered === "E@ss1234") {
```
Replace `"E@ss1234"` with your desired password.

### Change Default Passing Score
Modify in `defaultCourseData`:
```javascript
"passingScore": 70   // Change this number
```

### Change Color Scheme
Edit CSS variables at the top of `<style>`:
```css
:root {
  --primary: #2e7d32;      /* Green - used for passing */
  --secondary: #1976d2;    /* Blue - used for accents */
  --accent: #ffa000;       /* Orange - used for highlights */
}
```

---

## Browser Compatibility
- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Requires: ES6+ JavaScript, localStorage API, Canvas API (for certificates)

---

## Troubleshooting

### Course won't load
- Check JSON syntax (use jsonlint.com)
- Verify all required fields: courseMetadata, modules, topics, questions
- Ensure topic IDs are unique
- Check browser console for detailed error messages

### Quiz answers not saving
- Check browser allows localStorage
- Try different browser
- Clear browser cache and try again

### Certificate download not working
- Browser may be blocking downloads
- Check browser's download settings
- Try a different browser

### Quiz score seems wrong
- Single-choice questions require exact match
- Multiple-choice uses partial credit model
- Check "correct" array indices (0-based, not 1-based)

---

## File Structure

```
courses/
├── index.html                    # Main application file
├── sample-course-format.json     # Example course structure
└── README.md                     # This file
```

---

## What's New (v2.0)

### VS v1.2
- ✨ **Module-based organization** instead of flat structure
- ✨ **Per-topic quizzes** instead of single global exam
- ✨ **Optional quizzes** - users choose what to attempt
- ✨ **Average-based grading** - only counted quizzes factor in
- ✨ **Sidebar navigation** - jump to any topic instantly
- ✨ **Quiz retakes** - unlimited attempts per topic
- ✨ **Progress tracking** - visual indicators in sidebar
- ✨ **Persistent quiz history** - scores saved across sessions
- ✨ **Better UX** - structured learning path without forced progression

---

## Contact / Support
For questions about course creation or troubleshooting, refer to the sample JSON file and this documentation.
