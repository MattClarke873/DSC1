# DSC1

# DSC1 Quiz App

A mobile-first browser-based revision tool for the **Deer Stalking Certificate Level 1 (DSC1)** examination. Covers all three assessed areas: Knowledge, Safety, and Food Hygiene. No installation, no server, no internet connection required — open `DSC1_Quiz.html` in any modern browser and go.

-----

## Files

|File                          |Description                                                                                         |
|------------------------------|----------------------------------------------------------------------------------------------------|
|`DSC1_Quiz.html`              |Main application — open this in a browser                                                           |
|`KnowledgeQuestionBank.js`    |Original DSC1 knowledge MCQ bank (282 questions)                                                    |
|`KnowledgeQuestionBank2024.js`|Updated January 2024 official question bank (283 questions, verified against official answer key)   |
|`SafetyQuestionBank.js`       |DSC1 safety scenario question bank (26 questions, open-answer format)                               |
|`HygieneQuestionBank.js`      |FSA Industry Common Hygiene Questions May 2022 (119 questions, verified against official answer key)|

All five files must be kept in the **same folder** for the app to work.

-----

## Quiz Modes

### Knowledge Quiz

- 50 randomised multiple-choice questions drawn from the active knowledge bank
- Answer options are shuffled on each attempt so letter positions vary
- Immediate right/wrong feedback after each answer
- Full wrong-answer review at the end
- Pass mark: **80%** (matching the real DSC1 exam)
- Score history stored locally, showing date, score, and mode

### Safety Assessment

- 10 scenario-based questions drawn from the 26-question safety bank
- Open-answer format: read the question, think through your answer, then reveal the model answer
- Rate yourself **Got it** or **Needs work** after each reveal
- Questions are prioritised by those most recently marked as needing work
- Compulsory and Scotland-specific questions are flagged
- DMQ standard shown for each question so you know exactly what the examiner expects

### Hygiene Quiz

- 50 randomised multiple-choice questions from the 119-question FSA hygiene bank
- Same format and feedback as the Knowledge Quiz
- Separate score history and question statistics from the knowledge bank

-----

## Features

### Weighted Mode (Knowledge & Hygiene)

Toggle **Weighted mode** on the home screen before starting a quiz. When active:

- Questions you answer incorrectly are added to a priority pool and appear more frequently
- Questions you answer correctly are gradually deprioritised
- The **Mastery threshold** slider (1–10) controls how many correct answers are needed before a question is considered mastered and moved to the back of the pool

### Question Banks

Browse the full question set for any mode without taking a timed quiz:

- Filter by **All / Wrong / Correct / Unseen**
- Tap any question to see all four options with the correct answer highlighted
- Your correct/wrong attempt counts are shown for each question

### Resume

If you close or pause mid-quiz, your progress is automatically saved. A resume banner appears on the home screen next time you open the app.

### Score History

View all previous attempts with date, score, and whether weighted mode was used. Knowledge and hygiene histories are kept separately.

-----

## Switching Question Banks

The app ships configured to use `KnowledgeQuestionBank.js` (the original bank). To switch to the verified 2024 bank, edit `DSC1_Quiz.html` and change the script tag:

```html
<!-- Change this line -->
<script src="KnowledgeQuestionBank.js"></script>

<!-- To this -->
<script src="KnowledgeQuestionBank2024.js"></script>
```

The 2024 bank uses the same `QB` array name and is a drop-in replacement.

-----

## Question Bank Sources & Answer Verification

|Bank                          |Source                                        |Answers                               |
|------------------------------|----------------------------------------------|--------------------------------------|
|`KnowledgeQuestionBank.js`    |BDS DSC1 question bank (pre-2024)             |Knowledge-based                       |
|`KnowledgeQuestionBank2024.js`|Standard DSC1 Question Bank January 2024      |✅ Verified against official answer key|
|`SafetyQuestionBank.js`       |DMQ Safety Assessment question bank           |Open-answer (no MCQ key)              |
|`HygieneQuestionBank.js`      |FSA Industry Common Hygiene Questions May 2022|✅ Verified against official answer key|

-----

## Data & Privacy

All data (scores, question statistics, weighted mode settings) is stored in your browser’s **localStorage**. Nothing is sent to any server. Clearing your browser data or using incognito/private mode will reset all progress.

-----

## Browser Compatibility

Works in any modern browser (Chrome, Firefox, Safari, Edge). Optimised for mobile with safe-area support for notched iPhones. Can be saved to the home screen on iOS/Android as a progressive web app.

-----

## Exam Reference

- **Real exam pass mark:** 80% (Knowledge written paper)
- **Safety assessment:** All questions must be answered correctly — there is no partial pass
- **Regulatory body:** British Deer Society (BDS) / Deer Management Qualifications (DMQ)
- **Scotland-specific legislation:** NatureScot
- **England legislation:** Natural England / Defra
- **Wales legislation:** Natural Resources Wales
- **Northern Ireland legislation:** Department of Agriculture, Environment and Rural Affairs (DAERA)