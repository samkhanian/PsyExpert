# MindRules --- Simple Academic Expert System for Personality Tendency Screening

[English](#) · [فارسی](./README.fa.md)

MindRules is a lightweight, rule-based **Expert System** implemented in
HTML/JS. It is designed as an **academic, educational demonstration** of
how knowledge-based systems work. This project does **not** provide
clinical diagnosis.

## Purpose

This expert system demonstrates: - rule-based reasoning - a clear
knowledge base - a forward-chaining inference engine - an interactive UI

## Architecture

### Knowledge Base

Example rules:

IF person prefers solitude AND persistent detachment\
THEN pattern = "Schizoid-like tendency"

IF unstable relationships AND impulsive behavior\
THEN pattern = "Borderline-like tendency"

### Inference Engine

Forward chaining: 1. Ask questions\
2. Collect inputs\
3. Match rules\
4. Score\
5. Output result + activated rules

### User Interface

A single HTML page: - questions - result panel - JSON explanation

## File Structure

    MindRules/
    ├── index.html
    ├── engine.js
    ├── rules.js
    ├── style.css
    ├── README.md
    └── README.fa.md

## Run

Simply open index.html in your browser.

## Disclaimer

Educational only --- not a diagnostic tool.

## License

MIT
