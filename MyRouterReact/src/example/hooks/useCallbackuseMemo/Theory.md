# Understanding `useMemo` and `useCallback` Hooks

## 1. `useMemo` Hook
- **Purpose:** `useMemo` is used to **memoize expensive calculations** so that they are only recalculated when their dependencies change.
- **When to Use:** When you have complex computations (e.g., filtering a large list) that don't need to be recalculated on every render.
- **Real-World Example:** Imagine you're calculating the total price of items in a shopping cart. If only the items change, there's no need to recalculate the total when the counter or other unrelated states change.

    ```js
    const totalPrice = useMemo(() => calculateTotal(items), [items]);
    ```

### Why Use `useMemo`?
It helps to **optimize performance** by avoiding unnecessary recalculations of expensive operations when the dependent data hasn't changed.

---

## 2. `useCallback` Hook
- **Purpose:** `useCallback` is used to **memoize functions** so that they are not recreated on every render unless their dependencies change.
- **When to Use:** When passing functions to child components or when you want to prevent unnecessary re-renders of components that depend on the function.
- **Real-World Example:** If you have a button in a child component that triggers a function in the parent, using `useCallback` will ensure the function reference doesn't change unless it's necessary, preventing unnecessary re-renders of the child.

    ```js
    const handleClick = useCallback(() => { 
        console.log("Button clicked!"); 
    }, []);
    ```

### Why Use `useCallback`?
It helps to **optimize performance** by keeping the same function reference between renders, preventing unnecessary re-renders of components that depend on that function.

---

## In Summary:
- **`useMemo`**: Memoizes **values** (like the result of calculations) so they don’t need to be recalculated on every render.
- **`useCallback`**: Memoizes **functions** to avoid recreating them on every render unless their dependencies change.

Both hooks are primarily used for **performance optimization** in React applications.
