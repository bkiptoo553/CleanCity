### 1. Test Objectives

> Test marking a comment as in appropriate
> ensure a new blog post can be added
> Ensure comments can be rendered and deleted
> ensure a new blog post can be added

### 2. Scope

> 
> 
>
> * In scope: Game logic, scoring system
> * Out of scope: Browser compatibility

### 3. Resources

* **Team roles**: 1 tester
* **Tools**: Browser DevTools, JS console
* **Environment**: Chrome browser

### 4. Schedule

| Phase          | Time Estimate |
| -------------- | ------------- |
| Test Planning  |               |
| Test Design    |               |
| Test Execution |               |
| Reporting      |               |

### 5. Entry/Exit Criteria

* **Entry**: Game is functional on Chrome
* **Exit**: All critical bugs fixed, 90% test cases passed

---

## ⚠️ Risk Analysis Task

Create a `Risk_Analysis.md` file with:

### Risk Assessment Table

| Feature        | Risk                        | Likelihood | Impact | Priority |


### Risk Mitigation Strategies

> *Example*: For scoring risks: Implement boundary value testing

---

## 🧪 Test Design & Execution

### 1. Risk-Based Test Cases

Design 5 test cases prioritizing high-risk areas. Use this format:

```
**ID**: TC-01  
**Feature**: Scoring System  
**Test**: Verify score deduction when using hint  
**Steps**:  
1. Solve puzzle without hint  
2. Note score  
3. Solve identical puzzle with hint  

**Expected**: Hint reduces score by 2 points  
**Risk Priority**: High  
```

### 2. Exploratory Testing

While executing your test cases:

* Monitor console for errors
* Control test execution with DevTools

### 3. Defect Reporting

Log **2 bugs** in GitHub Issues using this format:

```
**Title**: Score not reset after new game  
**Steps**:  
1. Solve puzzle (score = 10)  
2. Click "New Puzzle"  
3. Solve next puzzle  

**Expected**: Score starts from 0  
**Actual**: Score accumulates continuously  
**Severity**: Medium  
**Risk Impact**: High (affects game fairness)  
```

---

## 📤 Submission Instructions
