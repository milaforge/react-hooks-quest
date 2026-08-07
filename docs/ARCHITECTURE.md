# Architecture

## Overview

The application is completely client-side.

```
Browser
│
├── React UI
├── Game Engine
├── Level Data
└── localStorage
```

No server exists.

---

# Layers

```
Pages

↓

Components

↓

Game Engine

↓

Storage
```

---

# Level Structure

```ts
interface Level {
    id: string;
    chapter: string;
    title: string;
    description: string;

    starterCode: string;

    solution: string;

    hint?: string;

    xp: number;
}
```

---

# Storage

```ts
interface SaveData {
    xp: number;

    completed: string[];

    unlocked: string[];
}
```

---

# Routing

```
/

/play

/level/:id

/progress

/settings
```

---

# Game Flow

```
Home

↓

Select mission

↓

Solve

↓

Validate

↓

Award XP

↓

Save Progress

↓

Unlock Next
```
