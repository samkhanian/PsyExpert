# MindRules — Simple Academic Expert System for Personality Tendency Screening

[English](#) · [فارسی](./README.fa.md)

**Student:** Jamal Samkhaniyan  
**Instructor:** Dr. Roya Namiranian  
**Course:** Expert Systems

MindRules is a lightweight, rule-based **Expert System** implemented in HTML, CSS, and JavaScript.  
It is designed as an **academic and educational demonstration** of how knowledge-based systems work.  
**This project does not provide clinical diagnosis.**

---

## Purpose

The purpose of this system is to demonstrate:

- How a **knowledge base** is structured using rules.  
- How a **forward-chaining inference engine** derives conclusions.  
- How user input is collected and analyzed interactively.  
- How **explainability** can be integrated to show why a conclusion was reached.

This project is ideal for students learning **Expert Systems** and **Artificial Intelligence reasoning methods**.

---

## Architecture

The system follows a modular design, separating concerns into different files:

```
MindRules/
├── index.html     # Main HTML page, user interface
├── style.css      # Styling for light theme
├── rules.js       # Knowledge base with rules and questions
├── engine.js      # Inference engine and execution logic
├── README.md      # Documentation in English
└── README.fa.md   # Documentation in Persian
```

### 1. Knowledge Base (`rules.js`)

- Contains all **questions** presented to the user.  
- Contains all **rules**, each rule has:
  - **ID**: unique identifier.  
  - **Name**: human-readable label.  
  - **Condition**: a function evaluating facts to determine if the rule applies.  
  - **Explain**: a short explanation of why the rule triggered.

**Example Rules:**

- If the person prefers solitude **AND** persistent detachment → `"Schizoid-like tendency"`  
- If unstable relationships **OR** impulsive behavior → `"Borderline-like tendency"`  
- If perfectionism **AND** order-sensitivity → `"OCPD-like tendency"`  
- If low empathy **AND** risk-taking → `"Antisocial-like tendency"`

---

### 2. Inference Engine (`engine.js`)

- Implements **forward chaining**:
  1. Collect user responses.  
  2. Evaluate each rule against collected facts.  
  3. Determine which rules are **active**.  
  4. Calculate scores (0–2 scale per question).  
  5. Generate **result panel** and **JSON explanation**.

- Includes **explainability**, showing why each rule fired and the score for each question.

---

### 3. User Interface (`index.html` + `style.css`)

- **Single-page application** with two main tabs:
  - **Documentation**: explains system, rules, and architecture.  
  - **Run System**: interactive form for answering questions.  

- **Questions:** Each question has 3 levels (0, 1, 2) representing intensity.  
- **Results Panel:** Shows:
  - Activated patterns.  
  - Explanation for each pattern.  
  - Detailed scores in a table.  
  - JSON export for external use.

- **Buttons:**  
  - Run / Evaluate  
  - Reset  
  - Copy JSON

- **Light Theme** with clean design for readability.

---

### 4. Execution

To run the system:

1. Open `index.html` in your browser.  
2. Select answers for all questions.  
3. Click **"بررسی و اجرا"** to see the result.  
4. Review **explainability** in JSON format for reasoning transparency.

> Online demo link (if hosted): [MindRules Online Run](./index.html)

---

## Disclaimer

This system is **educational only** and **not a clinical diagnostic tool**.

---

## License

MIT
