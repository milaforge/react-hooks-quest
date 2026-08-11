import type { Chapter, Mission } from "./types";

/*
 * React Hooks Quest — Curriculum
 *
 * 65 missions organized around the reasoning behind React's hooks and
 * rendering model.
 *
 * Each question has exactly four choices and exactly one correct answer.
 */

export const reactHooksChapters: Chapter[] = [
    {
        id: "react-mental-model",
        title: "React Mental Model",
        missions: [
            {
                id: "mental-001",
                title: "Rendering Is Calculation",
                question:
                    "A component renders JSX from its current props and state. What is the most accurate way to think about that render?",
                answers: [
                    "It is a command telling the browser exactly which DOM nodes to mutate",
                    "It is a calculation describing what the UI should look like for the current inputs",
                    "It is a one-time initialization step that happens only when the component mounts",
                    "It is a mechanism for persisting values between user interactions",
                ],
                correctAnswer: 1,
                explanation:
                    "A render is a calculation of the UI representation from the component's current inputs. React then decides what DOM changes are necessary.",
                xp: 10,
            },
            {
                id: "mental-002",
                title: "Why Local Variables Reset",
                question:
                    "A component assigns `let count = 0` during rendering and increments it in a click handler. Why does this not behave like React state?",
                answers: [
                    "Local variables cannot contain numbers in React",
                    "Event handlers are unable to modify local variables",
                    "The variable does not persist between renders and changing it does not tell React to render",
                    "React automatically converts local variables into props",
                ],
                correctAnswer: 2,
                explanation:
                    "A normal local variable belongs to one execution of the component function. It neither persists across renders nor participates in React's rendering update mechanism.",
                xp: 10,
            },
            {
                id: "mental-003",
                title: "Props Are Inputs",
                question:
                    "Why are props generally treated as inputs rather than values a component should modify directly?",
                answers: [
                    "Props are owned by the component's parent, so the child should describe changes through an appropriate state update or callback",
                    "Props can only contain primitive values",
                    "React prevents all JavaScript objects from being mutated",
                    "Props exist only during the initial render",
                ],
                correctAnswer: 0,
                explanation:
                    "The parent owns the prop value. Treating props as inputs keeps the data flow predictable and makes ownership explicit.",
                xp: 10,
            },
            {
                id: "mental-004",
                title: "Render Purity",
                question:
                    "Why should rendering avoid operations such as sending an API request or subscribing to a WebSocket?",
                answers: [
                    "Those operations are too slow for JavaScript",
                    "React only allows network requests inside event handlers",
                    "Rendering may run more than once, so external side effects during rendering can happen at unintended times",
                    "React cannot render components that use asynchronous code",
                ],
                correctAnswer: 2,
                explanation:
                    "Rendering should remain a predictable calculation. External side effects belong in an appropriate event or synchronization mechanism.",
                xp: 10,
            },
            {
                id: "mental-005",
                title: "Derived Values",
                question:
                    "A component stores `firstName`, `lastName`, and `fullName` in state even though `fullName` is always `firstName + lastName`. What is the main architectural problem?",
                answers: [
                    "React cannot store three state values in one component",
                    "The component has created redundant state that can become inconsistent with its source values",
                    "Strings cannot be derived during rendering",
                    "Derived values must always be stored in refs",
                ],
                correctAnswer: 1,
                explanation:
                    "If a value can always be calculated from existing state or props, storing it separately creates another source of truth and unnecessary synchronization.",
                xp: 10,
            },
        ],
    },

    {
        id: "use-state",
        title: "State",
        missions: [
            {
                id: "state-001",
                title: "Why State Exists",
                question:
                    "A value must survive a component's renders and its changes must update the displayed UI. Which property makes React state appropriate?",
                answers: [
                    "It is persistent across renders and participates in React's rendering updates",
                    "It is mutable without any React involvement",
                    "It is stored permanently in the browser",
                    "It can only contain primitive values",
                ],
                correctAnswer: 0,
                explanation:
                    "State provides persistent component data across renders, and updating state schedules React to render with the new value.",
                xp: 10,
            },
            {
                id: "state-002",
                title: "State vs Variable",
                question:
                    "A counter must remember its value after React renders the component again. Why is a normal local variable insufficient?",
                answers: [
                    "Local variables are immutable",
                    "React deletes variables after every event",
                    "Each render executes the component again, creating a new local variable",
                    "Local variables cannot be read by JSX",
                ],
                correctAnswer: 2,
                explanation:
                    "Each render is another execution of the component function. A local variable therefore does not provide persistent storage between renders.",
                xp: 10,
            },
            {
                id: "state-003",
                title: "State Causes Rendering",
                question:
                    "What is the key difference between changing a state value and mutating an ordinary variable?",
                answers: [
                    "State values can contain objects while variables cannot",
                    "A state update tells React that the component may need to render again",
                    "State updates happen synchronously while variables update asynchronously",
                    "Only state can be changed from an event handler",
                ],
                correctAnswer: 1,
                explanation:
                    "The important distinction is not the JavaScript value itself but its relationship to React's rendering system.",
                xp: 10,
            },
            {
                id: "state-004",
                title: "Functional Updates",
                question:
                    "Why is `setCount(c => c + 1)` preferable when several updates need to be based on the previous count?",
                answers: [
                    "It prevents React from rendering",
                    "It explicitly expresses each update as a transformation of the latest state value",
                    "It permanently mutates the original state variable",
                    "It bypasses React's state queue",
                ],
                correctAnswer: 1,
                explanation:
                    "The updater function receives the state value that React uses for that update, making chained updates based on previous state reliable.",
                xp: 10,
            },
            {
                id: "state-005",
                title: "State Ownership",
                question:
                    "Two sibling components need to read and update the same selected item. Where is the most direct place for the state?",
                answers: [
                    "Inside whichever sibling renders first",
                    "Inside both siblings independently",
                    "In their nearest common ancestor that can coordinate the value",
                    "Inside a ref in the child that displays it",
                ],
                correctAnswer: 2,
                explanation:
                    "Shared state is normally lifted to the closest common owner that needs to coordinate it, then passed down as needed.",
                xp: 10,
            },
            {
                id: "state-006",
                title: "State and Identity",
                question:
                    "A form has `name` and `email` fields. Which design best reflects independent values that can change separately?",
                answers: [
                    "One immutable string containing both fields",
                    "State representing the form data, with updates that preserve unrelated fields",
                    "A ref because form values never affect rendering",
                    "An Effect that reconstructs the fields after every render",
                ],
                correctAnswer: 1,
                explanation:
                    "Form data is reactive UI state. The update strategy should preserve fields that are not being changed rather than accidentally replacing unrelated data.",
                xp: 10,
            },
            {
                id: "state-007",
                title: "Don't Mirror Props",
                question:
                    "A component receives `color` as a prop and immediately copies it into state solely to display the same color. What is the strongest reason to avoid this?",
                answers: [
                    "State cannot contain strings",
                    "The copied state introduces a second source of truth that can become out of sync with the prop",
                    "Props are automatically converted to state",
                    "React renders props more slowly than state",
                ],
                correctAnswer: 1,
                explanation:
                    "If the component has no independent reason to change the value, the prop itself is already the source of truth.",
                xp: 10,
            },
        ],
    },

    {
        id: "state-architecture",
        title: "State Architecture",
        missions: [
            {
                id: "arch-001",
                title: "What Actually Needs State",
                question:
                    "Which value is the strongest candidate for state?",
                answers: [
                    "The result of filtering an existing product array by the current search term",
                    "The current text typed into a search input",
                    "The number of products after filtering",
                    "A constant API endpoint",
                ],
                correctAnswer: 1,
                explanation:
                    "The input text changes over time and affects rendering, so it is a natural piece of state. The filtered list and count can be derived from it.",
                xp: 10,
            },
            {
                id: "arch-002",
                title: "Single Source of Truth",
                question:
                    "A selected product is stored both as an object and as its product ID. What is the main risk of storing both?",
                answers: [
                    "Objects cannot be stored in state",
                    "The two values can disagree, creating redundant sources of truth",
                    "IDs always cause extra renders",
                    "React requires every value to have its own hook",
                ],
                correctAnswer: 1,
                explanation:
                    "If the selected product can be obtained from the ID and product collection, storing both increases the chance of inconsistency.",
                xp: 10,
            },
            {
                id: "arch-003",
                title: "Lift or Duplicate",
                question:
                    "Two components must always show the same selected tab. What is usually preferable to keeping separate state in each component?",
                answers: [
                    "Duplicate the state and synchronize it with Effects",
                    "Lift the state to a common owner",
                    "Store the value in two refs",
                    "Recalculate it from the current time",
                ],
                correctAnswer: 1,
                explanation:
                    "A shared owner gives both components one source of truth and avoids synchronization code between independent state values.",
                xp: 10,
            },
            {
                id: "arch-004",
                title: "Derived State Trap",
                question:
                    "A component stores `isEmpty` in state even though it is always `items.length === 0`. What is the best reason to remove that state?",
                answers: [
                    "Boolean state is discouraged",
                    "The value can be calculated directly from existing data without creating synchronization work",
                    "React cannot update booleans",
                    "Derived values require a custom hook",
                ],
                correctAnswer: 1,
                explanation:
                    "Because `isEmpty` is completely determined by `items`, calculating it during rendering avoids redundant state and synchronization.",
                xp: 10,
            },
            {
                id: "arch-005",
                title: "Server Data vs UI State",
                question:
                    "A component receives a list of products from an API and also tracks which product is selected. Why are these conceptually different kinds of state?",
                answers: [
                    "The API data is external data while selection is local UI state",
                    "Only API data can be stored in state",
                    "Selection should always be global state",
                    "API data cannot be rendered by React",
                ],
                correctAnswer: 0,
                explanation:
                    "The product list originates outside the component, while selection represents a local UI decision. They may need different ownership and synchronization strategies.",
                xp: 10,
            },
        ],
    },

    {
        id: "use-effect",
        title: "Effects",
        missions: [
            {
                id: "effect-001",
                title: "Purpose of Effects",
                question:
                    "A component must keep the browser document title synchronized with the current count. Why is an Effect appropriate?",
                answers: [
                    "The title is derived UI that React should store in component state",
                    "The document is an external system that must be synchronized with React state",
                    "Effects are required whenever a number changes",
                    "The Effect makes the count persistent",
                ],
                correctAnswer: 1,
                explanation:
                    "The browser document is outside React's rendering tree. An Effect is appropriate for synchronizing it with reactive values.",
                xp: 10,
            },
            {
                id: "effect-002",
                title: "Effect or Event",
                question:
                    "A user clicks `Buy`, and the application should send a purchase request exactly because that click occurred. Where should the purchase action normally begin?",
                answers: [
                    "In an Effect that watches the selected product",
                    "In the click event handler",
                    "In the component render function",
                    "In a ref callback",
                ],
                correctAnswer: 1,
                explanation:
                    "The purchase is caused by a specific user interaction, so the event handler directly represents its cause. Effects are primarily for synchronization caused by rendering.",
                xp: 10,
            },
            {
                id: "effect-003",
                title: "External Systems",
                question:
                    "Which situation most clearly represents the kind of problem an Effect is designed to solve?",
                answers: [
                    "Calculating `total = price * quantity`",
                    "Filtering an array for visible items",
                    "Subscribing to a WebSocket while the component is active",
                    "Choosing which JSX element to return",
                ],
                correctAnswer: 2,
                explanation:
                    "A WebSocket is an external system. An Effect can establish and synchronize that connection with the component lifecycle.",
                xp: 10,
            },
            {
                id: "effect-004",
                title: "Dependencies as Synchronization",
                question:
                    "An Effect creates a connection using `roomId`. What does including `roomId` in its dependency list primarily communicate?",
                answers: [
                    "The Effect must run exactly once",
                    "The synchronization should be reconsidered when the room ID changes",
                    "The room ID should be stored permanently",
                    "React should ignore all other values used by the Effect",
                ],
                correctAnswer: 1,
                explanation:
                    "Dependencies describe the reactive values that the Effect uses for its synchronization. A changed `roomId` means the synchronization may need to be recreated.",
                xp: 10,
            },
            {
                id: "effect-005",
                title: "Missing Dependency",
                question:
                    "An Effect reads `name` to set `document.title`, but its dependency array is `[]`. What is the conceptual problem?",
                answers: [
                    "The Effect cannot read strings",
                    "The synchronization is declared as independent of `name` even though it uses `name`",
                    "Empty dependency arrays are invalid",
                    "Document title must be stored in a ref",
                ],
                correctAnswer: 1,
                explanation:
                    "If the Effect's synchronization depends on `name`, the dependency declaration should reflect that relationship.",
                xp: 10,
            },
            {
                id: "effect-006",
                title: "Cleanup",
                question:
                    "An Effect subscribes to an event source. Why should it return an unsubscribe function?",
                answers: [
                    "To prevent the component from rendering again",
                    "To reverse the synchronization when the Effect is no longer active or before it is recreated",
                    "To persist the subscription in state",
                    "To make the subscription synchronous",
                ],
                correctAnswer: 1,
                explanation:
                    "Cleanup prevents stale subscriptions and releases the external resource when synchronization is replaced or removed.",
                xp: 10,
            },
            {
                id: "effect-007",
                title: "Effect Feedback Loop",
                question:
                    "An Effect updates state, and that state is one of the Effect's dependencies. Under what condition can this create an unintended loop?",
                answers: [
                    "Whenever the state update causes the dependency to change again",
                    "Only when the state is a string",
                    "Only when the component has props",
                    "Never; Effects cannot trigger renders",
                ],
                correctAnswer: 0,
                explanation:
                    "If the Effect changes a reactive value that causes the Effect to run again, it can form a render → Effect → state update → render cycle.",
                xp: 10,
            },
            {
                id: "effect-008",
                title: "Remove the Effect",
                question:
                    "A component uses an Effect to calculate a filtered array from `products` and `query`, then stores the result in state. What is usually the better design?",
                answers: [
                    "Keep the Effect because all calculations belong in Effects",
                    "Calculate the filtered result during rendering because it is derived from existing data",
                    "Move the result into a ref",
                    "Use two Effects to keep the result synchronized",
                ],
                correctAnswer: 1,
                explanation:
                    "Filtering existing data is a render-time calculation, not synchronization with an external system. An Effect adds unnecessary state and an extra synchronization step.",
                xp: 10,
            },
        ],
    },

    {
        id: "use-ref",
        title: "Refs",
        missions: [
            {
                id: "ref-001",
                title: "Why Refs Exist",
                question:
                    "A component needs to remember a value between renders, but changing that value should not update the displayed UI. Which mechanism best fits?",
                answers: [
                    "State",
                    "A ref",
                    "A derived variable",
                    "A prop",
                ],
                correctAnswer: 1,
                explanation:
                    "A ref persists across renders and can be mutated without scheduling a React render.",
                xp: 10,
            },
            {
                id: "ref-002",
                title: "DOM Access",
                question:
                    "A button should focus an input after a user action. Why is a ref useful for the input element?",
                answers: [
                    "It lets React store the input's value automatically",
                    "It provides a persistent reference to the DOM node so imperative APIs such as `focus()` can be called",
                    "It prevents the input from rendering",
                    "It replaces the input's props",
                ],
                correctAnswer: 1,
                explanation:
                    "Refs provide access to DOM nodes when imperative interaction with the browser is required.",
                xp: 10,
            },
            {
                id: "ref-003",
                title: "Ref Mutation",
                question:
                    "Why does assigning `timerRef.current = id` not by itself cause the component to render again?",
                answers: [
                    "Refs are immutable",
                    "React does not treat changes to `ref.current` as reactive state updates",
                    "JavaScript timers cannot trigger rendering",
                    "Refs are stored outside the browser",
                ],
                correctAnswer: 1,
                explanation:
                    "A ref is a mutable container whose changes are not part of React's reactive rendering mechanism.",
                xp: 10,
            },
            {
                id: "ref-004",
                title: "State or Ref",
                question:
                    "Which value should generally be state rather than a ref?",
                answers: [
                    "The ID of an active timer used only for cleanup",
                    "A DOM element that needs imperative focus",
                    "The text currently displayed to the user",
                    "An internal mutable object that does not affect rendering",
                ],
                correctAnswer: 2,
                explanation:
                    "Displayed text must participate in rendering, so changing it needs to trigger a React update.",
                xp: 10,
            },
            {
                id: "ref-005",
                title: "Refs Are Not State",
                question:
                    "A developer stores `isMenuOpen` in a ref so toggling it does not cause a render. Why is that usually wrong if the value controls whether the menu is displayed?",
                answers: [
                    "Refs cannot contain booleans",
                    "The UI depends on the value, so the change needs to participate in React's rendering flow",
                    "Refs can only store DOM elements",
                    "A menu can only be controlled by context",
                ],
                correctAnswer: 1,
                explanation:
                    "If changing a value changes what the user sees, that value generally belongs in reactive state rather than a non-reactive ref.",
                xp: 10,
            },
        ],
    },

    {
        id: "use-context",
        title: "Context",
        missions: [
            {
                id: "context-001",
                title: "Why Context",
                question:
                    "A theme value must be consumed by deeply nested components, while intermediate components have no reason to know about it. What problem does Context address?",
                answers: [
                    "It prevents all components from rendering",
                    "It avoids passing the value through unrelated intermediate components",
                    "It converts state into persistent storage",
                    "It replaces every use of props",
                ],
                correctAnswer: 1,
                explanation:
                    "Context provides a way for descendants to consume a value from an ancestor without explicitly forwarding it through every intermediate component.",
                xp: 10,
            },
            {
                id: "context-002",
                title: "Context Is Not Global State",
                question:
                    "Why is describing Context simply as 'global state' misleading?",
                answers: [
                    "Context values cannot change",
                    "Context is primarily a mechanism for making a value available through a component subtree, regardless of where that value is managed",
                    "Context only works for primitive values",
                    "Context exists outside React",
                ],
                correctAnswer: 1,
                explanation:
                    "Context transports values through a tree. The value may come from state, a constant, or another source; Context itself is not a complete state-management solution.",
                xp: 10,
            },
            {
                id: "context-003",
                title: "Provider Boundary",
                question:
                    "A component reads a context value. What determines which provided value it receives?",
                answers: [
                    "The provider closest to it in the relevant ancestor tree",
                    "The provider that was created first in JavaScript",
                    "The component's local variable name",
                    "The browser's current URL",
                ],
                correctAnswer: 0,
                explanation:
                    "Context lookup follows the component tree and uses the nearest applicable provider.",
                xp: 10,
            },
            {
                id: "context-004",
                title: "When Not to Use Context",
                question:
                    "A value is used by only one component and is naturally local to that component. Why is Context usually unnecessary?",
                answers: [
                    "Context cannot store local values",
                    "Introducing a provider adds architectural indirection without solving a sharing problem",
                    "Context always causes infinite loops",
                    "Local state cannot be used with Context",
                ],
                correctAnswer: 1,
                explanation:
                    "Context is useful when a value needs to cross component boundaries. For purely local data, local state or props are usually simpler.",
                xp: 10,
            },
            {
                id: "context-005",
                title: "Context and Updates",
                question:
                    "A provider's value changes. What is the important consequence for components consuming that context?",
                answers: [
                    "They can observe the updated context value and may render again",
                    "They permanently keep the old value",
                    "They automatically become independent copies of the provider",
                    "Only the provider itself can render again",
                ],
                correctAnswer: 0,
                explanation:
                    "Context is part of React's reactive data flow. Consumers can update when the provided value changes.",
                xp: 10,
            },
        ],
    },

    {
        id: "use-reducer",
        title: "Reducers",
        missions: [
            {
                id: "reducer-001",
                title: "Why useReducer",
                question:
                    "A component has many related state transitions and the rules for changing state are becoming difficult to follow. What problem can `useReducer` address?",
                answers: [
                    "It moves all state into the browser",
                    "It centralizes state transition logic around explicit actions and a reducer",
                    "It prevents state from changing",
                    "It automatically fetches server data",
                ],
                correctAnswer: 1,
                explanation:
                    "A reducer makes complex transition rules explicit by mapping actions and current state to the next state.",
                xp: 10,
            },
            {
                id: "reducer-002",
                title: "Action Intent",
                question:
                    "Why can an action such as `{ type: 'ITEM_ADDED', item }` be useful compared with directly updating several state variables from a component?",
                answers: [
                    "It describes the event or intent that caused the transition",
                    "It makes JavaScript asynchronous",
                    "It prevents the reducer from reading state",
                    "It stores the action permanently",
                ],
                correctAnswer: 0,
                explanation:
                    "Actions describe what happened, while the reducer contains the rules for translating that event into the next state.",
                xp: 10,
            },
            {
                id: "reducer-003",
                title: "Reducer Purity",
                question:
                    "What should a reducer primarily do when given current state and an action?",
                answers: [
                    "Perform an API request",
                    "Mutate the DOM",
                    "Calculate the next state from the current state and action",
                    "Schedule an Effect",
                ],
                correctAnswer: 2,
                explanation:
                    "A reducer is a state transition function. External side effects do not belong in the reducer itself.",
                xp: 10,
            },
            {
                id: "reducer-004",
                title: "State Machine Thinking",
                question:
                    "A checkout flow has states such as `idle`, `submitting`, `success`, and `error`, with explicit transitions between them. Why might a reducer improve the design?",
                answers: [
                    "It makes the possible transitions more explicit and centralized",
                    "It removes the need for rendering",
                    "It automatically validates the payment",
                    "It turns all state into server state",
                ],
                correctAnswer: 0,
                explanation:
                    "Reducers are useful when state transitions form a meaningful set of rules that benefits from being represented explicitly.",
                xp: 10,
            },
            {
                id: "reducer-005",
                title: "Reducer vs Multiple State Hooks",
                question:
                    "When is `useReducer` most justified compared with several simple `useState` values?",
                answers: [
                    "Whenever a component has more than one state variable",
                    "When related transitions are complex enough that centralizing their rules improves clarity",
                    "Whenever state contains an object",
                    "Only when state must persist after page reload",
                ],
                correctAnswer: 1,
                explanation:
                    "The number of state variables alone does not justify a reducer. The complexity and relationship of the transitions are more important.",
                xp: 10,
            },
        ],
    },

    {
        id: "custom-hooks",
        title: "Custom Hooks",
        missions: [
            {
                id: "custom-001",
                title: "Why Custom Hooks",
                question:
                    "Two components implement the same stateful behavior with the same hooks. What is the strongest reason to extract a custom hook?",
                answers: [
                    "To share one state instance between the components",
                    "To reuse the stateful logic while allowing each component to have its own hook state",
                    "To prevent React from rendering either component",
                    "To turn the logic into global state automatically",
                ],
                correctAnswer: 1,
                explanation:
                    "Custom hooks reuse logic. Each component calling the hook still receives its own independent hook state.",
                xp: 10,
            },
            {
                id: "custom-002",
                title: "Sharing Logic vs State",
                question:
                    "Components A and B both call `useOnlineStatus()`. Why should you not assume they share the same `online` state instance?",
                answers: [
                    "Custom hooks cannot use state",
                    "Each component gets its own hook invocation and therefore its own stateful instance",
                    "Hooks always return constants",
                    "Context automatically merges hook state",
                ],
                correctAnswer: 1,
                explanation:
                    "A custom hook is an abstraction around hook calls. Calling it from two components creates two separate hook instances.",
                xp: 10,
            },
            {
                id: "custom-003",
                title: "Extracting Behavior",
                question:
                    "Several components need identical subscription setup and cleanup logic. What makes a custom hook a good abstraction?",
                answers: [
                    "It hides the repeated synchronization behavior behind a reusable interface",
                    "It guarantees the subscription becomes global",
                    "It removes the need for cleanup",
                    "It makes the external system part of React rendering",
                ],
                correctAnswer: 0,
                explanation:
                    "A custom hook can encapsulate the Effect and its cleanup while exposing only the behavior the consuming component needs.",
                xp: 10,
            },
            {
                id: "custom-004",
                title: "Hook API Design",
                question:
                    "A custom hook manages a search query and results. What is the most useful design principle for its return value?",
                answers: [
                    "Expose every internal variable regardless of whether callers need it",
                    "Expose a small interface representing the behavior consumers actually need",
                    "Always return the entire component",
                    "Return only the internal Effect",
                ],
                correctAnswer: 1,
                explanation:
                    "A good custom hook creates an abstraction boundary. Consumers should depend on the behavior and data they actually need, not implementation details.",
                xp: 10,
            },
            {
                id: "custom-005",
                title: "Custom Hook Boundaries",
                question:
                    "When should logic remain inside a component instead of becoming a custom hook?",
                answers: [
                    "When it is local, simple, and has no meaningful reuse or abstraction boundary",
                    "Whenever it uses `useState`",
                    "Whenever it uses an Effect",
                    "Only when the component has no props",
                ],
                correctAnswer: 0,
                explanation:
                    "Extraction has a cost. A custom hook is useful when it creates a meaningful reusable or conceptual boundary, not merely because hooks are present.",
                xp: 10,
            },
        ],
    },

    {
        id: "memoization",
        title: "Memoization",
        missions: [
            {
                id: "memo-001",
                title: "What useMemo Does",
                question:
                    "What problem does `useMemo` primarily address?",
                answers: [
                    "Persisting state between page reloads",
                    "Memoizing the result of a calculation so React can reuse it when dependencies have not changed",
                    "Synchronizing with browser APIs",
                    "Sharing state between components",
                ],
                correctAnswer: 1,
                explanation:
                    "`useMemo` caches the result of a calculation between renders based on its dependencies. It is not a replacement for state.",
                xp: 10,
            },
            {
                id: "memo-002",
                title: "Memoization vs Derived State",
                question:
                    "A filtered list is inexpensive to calculate from existing state. Why is adding `useMemo` not automatically an improvement?",
                answers: [
                    "Memoization only works for asynchronous calculations",
                    "The caching mechanism itself has complexity and overhead, so an inexpensive calculation may not benefit",
                    "Derived values cannot be memoized",
                    "useMemo always causes an extra render",
                ],
                correctAnswer: 1,
                explanation:
                    "Memoization is a performance tool, not a correctness requirement. It should be justified by actual calculation cost or a dependency-identity requirement.",
                xp: 10,
            },
            {
                id: "memo-003",
                title: "Dependency Meaning",
                question:
                    "A memoized calculation uses `products` and `query`. What should the dependency list represent?",
                answers: [
                    "Every value in the application",
                    "The reactive values whose changes can change the calculation's result",
                    "Only the most frequently changing value",
                    "The values that should be stored permanently",
                ],
                correctAnswer: 1,
                explanation:
                    "Dependencies describe the reactive inputs that the memoized calculation relies on.",
                xp: 10,
            },
            {
                id: "memo-004",
                title: "Function Identity",
                question:
                    "Why can recreating an inline callback on every render matter when passing it to a memoized child?",
                answers: [
                    "The function may have a different identity on each render, which can invalidate the child's memoization",
                    "Functions cannot be passed as props",
                    "React executes every callback immediately",
                    "Callbacks are automatically converted to state",
                ],
                correctAnswer: 0,
                explanation:
                    "Functions are objects with identity. A newly created callback is a different reference, which can matter when referential equality is used for memoization.",
                xp: 10,
            },
            {
                id: "memo-005",
                title: "Why useCallback",
                question:
                    "What is the most accurate reason to consider `useCallback`?",
                answers: [
                    "To make a callback execute faster",
                    "To preserve a function reference between renders when that stable identity has a useful consumer",
                    "To make an event handler asynchronous",
                    "To store a callback permanently in the browser",
                ],
                correctAnswer: 1,
                explanation:
                    "`useCallback` memoizes a function reference. Its value comes from cases where referential identity affects memoization or dependency behavior.",
                xp: 10,
            },
            {
                id: "memo-006",
                title: "Avoiding Premature Memoization",
                question:
                    "A component is simple, renders quickly, and has no measured performance problem. What is the strongest reason not to add memoization everywhere?",
                answers: [
                    "Memoization is forbidden for simple components",
                    "Memoization adds complexity and maintenance cost without a demonstrated benefit",
                    "Memoization only works in production",
                    "React ignores memoized values",
                ],
                correctAnswer: 1,
                explanation:
                    "Optimization should address a real cost. Unnecessary memoization makes code harder to reason about without necessarily improving performance.",
                xp: 10,
            },
        ],
    },

    {
        id: "advanced-hooks",
        title: "Advanced Hooks",
        missions: [
            {
                id: "advanced-001",
                title: "Layout Effects",
                question:
                    "A component must measure a DOM element and synchronously adjust its layout before the user sees the result. Why might `useLayoutEffect` be appropriate?",
                answers: [
                    "It runs in a way that allows layout work before the browser paints",
                    "It stores the DOM measurement permanently",
                    "It prevents all browser painting",
                    "It replaces state updates",
                ],
                correctAnswer: 0,
                explanation:
                    "useLayoutEffect is intended for layout-related work that must be completed before the browser paints, avoiding visible intermediate layout states.",
                xp: 10,
            },
            {
                id: "advanced-002",
                title: "Imperative APIs",
                question:
                    "A reusable input component should expose a controlled imperative method such as `focus()` to its parent. Which hook is designed for customizing the ref handle?",
                answers: [
                    "useMemo",
                    "useImperativeHandle",
                    "useReducer",
                    "useContext",
                ],
                correctAnswer: 1,
                explanation:
                    "useImperativeHandle lets a component customize the value exposed through a ref, which is useful for narrowly defined imperative APIs.",
                xp: 10,
            },
            {
                id: "advanced-003",
                title: "Imperative vs Declarative",
                question:
                    "Why should an imperative ref API generally expose only a small set of necessary commands?",
                answers: [
                    "A broad imperative API increases coupling and bypasses the component's declarative interface",
                    "Refs cannot contain more than one method",
                    "React requires every method to be exposed",
                    "Imperative APIs are always faster than props",
                ],
                correctAnswer: 0,
                explanation:
                    "Imperative APIs should be narrow. Exposing internal implementation details makes consumers tightly coupled to the component.",
                xp: 10,
            },
            {
                id: "advanced-004",
                title: "Specialized Hooks",
                question:
                    "What is the strongest reason to prefer a specialized hook only when its specific problem exists?",
                answers: [
                    "Specialized hooks are syntactically harder",
                    "Each hook encodes a particular rendering or synchronization concern, so using one without that concern adds complexity without solving a problem",
                    "React permits only one specialized hook per component",
                    "Specialized hooks cannot be combined",
                ],
                correctAnswer: 1,
                explanation:
                    "Hooks are mechanisms for particular problems. Choosing one should follow from the problem rather than from a desire to use more advanced APIs.",
                xp: 10,
            },
            {
                id: "advanced-006",
                title: "Hook Rules",
                question:
                    "Why must hooks be called consistently at the top level of a component or custom hook rather than conditionally inside branches?",
                answers: [
                    "React associates hook state with the stable order of hook calls across renders",
                    "Hooks cannot be used inside JavaScript functions",
                    "Conditional code is not supported by TypeScript",
                    "React only executes hooks during the first render",
                ],
                correctAnswer: 0,
                explanation:
                    "React relies on the consistent ordering of hook calls to associate each hook invocation with its stored state and behavior.",
                xp: 10,
            },
        ],
    },

    {
        id: "hook-decision-lab",
        title: "Hook Decision Lab",
        missions: [
            {
                id: "decision-001",
                title: "Search Results",
                question:
                    "A search page has `products` and `query`. The visible filtered list is completely determined by those values. Which design best represents the relationship?",
                answers: [
                    "Store `filteredProducts` in state and update it with an Effect",
                    "Store `filteredProducts` in a ref",
                    "Calculate `filteredProducts` from `products` and `query` during rendering",
                    "Put `filteredProducts` into Context",
                ],
                correctAnswer: 2,
                explanation:
                    "The filtered list is derived data. It does not need an independent source of truth or synchronization Effect.",
                xp: 10,
            },
            {
                id: "decision-002",
                title: "Previous Value",
                question:
                    "A component needs to remember the previous prop value for comparison, but changing that remembered value should not itself cause a render. Which mechanism best fits?",
                answers: [
                    "State",
                    "A ref",
                    "Context",
                    "A reducer",
                ],
                correctAnswer: 1,
                explanation:
                    "A ref can retain a mutable value across renders without making that value part of the reactive rendering flow.",
                xp: 10,
            },
            {
                id: "decision-003",
                title: "Live Subscription",
                question:
                    "A component should receive live updates from a WebSocket while it is mounted and stop receiving them when the relevant connection changes. What conceptual mechanism is most appropriate?",
                answers: [
                    "A render-time calculation",
                    "An Effect with synchronization and cleanup",
                    "A ref without any synchronization logic",
                    "useMemo",
                ],
                correctAnswer: 1,
                explanation:
                    "A live subscription is an external system that must be established, synchronized, and cleaned up in relation to the component's reactive inputs.",
                xp: 10,
            },
            {
                id: "decision-004",
                title: "Button Action",
                question:
                    "A request should be sent only when the user explicitly clicks `Save`. Which mechanism most directly represents the cause of the request?",
                answers: [
                    "The click event handler",
                    "An Effect that watches the form",
                    "A memoized value",
                    "A context provider",
                ],
                correctAnswer: 0,
                explanation:
                    "The click is the direct cause of the action, so the event handler is the clearest place to initiate it.",
                xp: 10,
            },
            {
                id: "decision-005",
                title: "Timer Identifier",
                question:
                    "A component needs to retain a timer identifier so cleanup can cancel the timer, but the identifier is not displayed in the UI. Which mechanism is the best fit?",
                answers: [
                    "State",
                    "A ref",
                    "Context",
                    "Derived rendering",
                ],
                correctAnswer: 1,
                explanation:
                    "The timer identifier must persist but does not itself affect rendering, making a ref appropriate.",
                xp: 10,
            },
            {
                id: "decision-006",
                title: "Shared Theme",
                question:
                    "A theme preference must be consumed by many components at different depths, and passing it through unrelated components would add no meaning. Which architecture is most direct?",
                answers: [
                    "Duplicate the theme state in every component",
                    "Use Context to provide the theme through the relevant subtree",
                    "Store the theme in a local variable in each component",
                    "Use an Effect in every component to read the theme",
                ],
                correctAnswer: 1,
                explanation:
                    "Context addresses the component-tree distribution problem while allowing the theme's actual state ownership to remain explicit.",
                xp: 10,
            },
            {
                id: "decision-007",
                title: "Complex Form Flow",
                question:
                    "A form has many related transitions such as reset, submit, validation success, and validation failure. Which approach can make those transition rules clearer?",
                answers: [
                    "Many unrelated Effects that synchronize individual fields",
                    "A reducer with explicit actions representing the transitions",
                    "Refs for every field",
                    "Derived values only",
                ],
                correctAnswer: 1,
                explanation:
                    "A reducer centralizes related transition rules and makes the events that cause state changes explicit.",
                xp: 10,
            },
            {
                id: "decision-008",
                title: "Expensive Calculation",
                question:
                    "A component performs a genuinely expensive calculation from a small set of stable inputs, and profiling shows the calculation is a performance bottleneck. Which mechanism is worth considering?",
                answers: [
                    "useMemo",
                    "useRef",
                    "useContext",
                    "useEffect solely to cache the result in state",
                ],
                correctAnswer: 0,
                explanation:
                    "useMemo can reuse the expensive calculation result when its reactive inputs have not changed. Profiling provides the justification for the optimization.",
                xp: 10,
            },
            {
                id: "decision-009",
                title: "Stable Callback Identity",
                question:
                    "A memoized child receives a callback prop, and profiling shows that recreating the callback causes unnecessary child renders. Which mechanism can address the callback's referential identity?",
                answers: [
                    "useCallback",
                    "useEffect",
                    "useReducer",
                    "useRef for the child element",
                ],
                correctAnswer: 0,
                explanation:
                    "useCallback can preserve the callback reference between renders when its dependencies have not changed, which can support memoization.",
                xp: 10,
            },
        ],
    },
];

export const allReactHooksMissions: Mission[] =
    reactHooksChapters.flatMap((chapter) => chapter.missions);
