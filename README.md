# MindRules — Simple Expert System for Personality Patterns

## Student: Jamal Samkhaniyan  
## Instructor: Dr. Roya Namiranian  
## Course: Expert Systems

---

## 🧠 What is MindRules?

MindRules is a lightweight, rule-based **Expert System** implemented with **HTML, CSS, and JavaScript**.

**Purpose:**

- Knowledge base with personality questions and rules  
- Forward-chaining inference engine  
- Interactive user interface  
- Explainability for reasoning (show why each rule fired)

---

## 📚 Knowledge Base

The system stores personality traits as questions and rules:

**Questions:**

| Key | Label |
|-----|-------|
| fear_rejection | Fear of rejection |
| avoid_people  | Avoidance of social gatherings |
| impulsivity   | Impulsivity |
| unstable_relationships | Unstable relationships |
| perfectionism | Perfectionism |
| order_sensitive | Sensitivity to order |
| low_empathy   | Low empathy |
| risk_taking   | Risk-taking behavior |

**Sample Rules:**

| Rule ID | Name | Condition | Explanation |
|---------|------|-----------|-------------|
| Avoidant | Avoidant Pattern | fear_rejection ≥2 AND avoid_people ≥2 | Fear of rejection and avoidance of social situations |
| Borderline | Borderline Pattern | unstable_relationships ≥2 OR impulsivity ≥2 | Unstable relationships or impulsivity |
| OCPD | Obsessive Pattern | perfectionism ≥2 AND order_sensitive ≥2 | Perfectionism and order sensitivity |
| Antisocial | Antisocial Pattern | low_empathy ≥2 AND risk_taking ≥2 | Low empathy and risk-taking |

---

## ⚙️ Inference Engine

MindRules uses **forward chaining**:

1. **Ask Questions** – collect scores 0–3 from the user.
2. **Collect Responses** – store user answers.
3. **Match Rules** – evaluate conditions (≥2 counts as active).
4. **Compute Scores** – calculate which patterns are active.
5. **Show Results** – display active patterns + explanation.

**Example:**

If `fear_rejection=3` and `avoid_people=2` → Rule `Avoidant` fires:  
*Reason:* "Fear of rejection and avoidance of social situations".

---

## 💻 Run

Open `index.html` in a browser, answer the questions, click **Run**, and see results with explanations.  

[View demo](https://samkhanian.github.io/PsyExpert/)  
[Persian documentation](./README.fa.md)
