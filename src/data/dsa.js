// DSA Database for InterviewVerse AI
export const dsaData = {
  "arrays": {
    title: "Arrays & Strings",
    theory: "An Array is a contiguous memory structure containing elements of the same type. It supports O(1) random access but O(N) insertion/deletion (since elements must shift). Key patterns include Two Pointers, Sliding Window, and Prefix Sums. A String is an array of characters, often queried using hash maps or trie arrays.",
    stepsData: {
      title: "Visualizing Reverse Array: [1, 2, 3, 4, 5]",
      steps: [
        { array: [1, 2, 3, 4, 5], pointers: { left: 0, right: 4 }, description: "Initialize Left at index 0, Right at index 4 (last element)." },
        { array: [5, 2, 3, 4, 1], pointers: { left: 0, right: 4 }, description: "Swap elements at Left and Right: 1 and 5 swap." },
        { array: [5, 2, 3, 4, 1], pointers: { left: 1, right: 3 }, description: "Increment Left to 1, Decrement Right to 3." },
        { array: [5, 4, 3, 2, 1], pointers: { left: 1, right: 3 }, description: "Swap elements at Left and Right: 2 and 4 swap." },
        { array: [5, 4, 3, 2, 1], pointers: { left: 2, right: 2 }, description: "Left meets Right at index 2. Array reversed." }
      ]
    },
    questions: [
      { title: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum" },
      { title: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock" },
      { title: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water" }
    ],
    explanation: "Two-pointer strategies allow you to process arrays in linear O(N) time by starting from both ends or maintaining a sliding window, avoiding nesting loops O(N^2)."
  },
  "binary-search": {
    title: "Binary Search",
    theory: "Binary Search is a divide-and-conquer algorithm designed for sorted search spaces. It repeatedly divides the search interval in half. Time complexity is O(log N). Critical for searching values, boundary conditions, and optimizing math bounds.",
    stepsData: {
      title: "Search 6 in sorted array: [1, 3, 4, 6, 8, 9]",
      steps: [
        { array: [1, 3, 4, 6, 8, 9], pointers: { low: 0, high: 5, mid: 2 }, description: "low=0, high=5. Mid = (0+5)/2 = 2. Array[mid] = 4 < 6. Move low to mid + 1." },
        { array: [1, 3, 4, 6, 8, 9], pointers: { low: 3, high: 5, mid: 4 }, description: "low=3, high=5. Mid = (3+5)/2 = 4. Array[mid] = 8 > 6. Move high to mid - 1." },
        { array: [1, 3, 4, 6, 8, 9], pointers: { low: 3, high: 3, mid: 3 }, description: "low=3, high=3. Mid = (3+3)/2 = 3. Array[mid] = 6 == 6. Target found at index 3!" }
      ]
    },
    questions: [
      { title: "Search in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array" },
      { title: "First and Last Position of Element in Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array" },
      { title: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays" }
    ],
    explanation: "Binary search applies to any monotonic function. If checking a value X returns true/false in a sorted order, you can binary search the boundary."
  },
  "trees": {
    title: "Trees & Graphs",
    theory: "Trees are hierarchical graphs with no cycles. Graphs contain nodes connected by edges, which can be directed or undirected, weighted or unweighted. Traversals include Depth First Search (DFS, stack-based/recursive) and Breadth First Search (BFS, queue-based).",
    stepsData: {
      title: "BFS Graph Traversal from Node A",
      steps: [
        { queue: ["A"], visited: ["A"], description: "Add root A to the queue, mark A as visited." },
        { queue: ["B", "C"], visited: ["A", "B", "C"], description: "Dequeue A. Add A's unvisited neighbors B and C. Visited: A, B, C." },
        { queue: ["C", "D"], visited: ["A", "B", "C", "D"], description: "Dequeue B. Add B's neighbor D. Visited: A, B, C, D." },
        { queue: ["D"], visited: ["A", "B", "C", "D"], description: "Dequeue C. C has no unvisited neighbors." },
        { queue: [], visited: ["A", "B", "C", "D"], description: "Dequeue D. Queue is empty, traversal finished." }
      ]
    },
    questions: [
      { title: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree" },
      { title: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule" },
      { title: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder" }
    ],
    explanation: "BFS is optimal for finding the shortest path in unweighted graphs. DFS is perfect for exploring all paths, cycle detection, and topological sorting."
  },
  "dynamic-programming": {
    title: "Dynamic Programming",
    theory: "Dynamic Programming (DP) solves complex problems by breaking them down into simpler, overlapping subproblems. It saves computation time by storing subproblem results (Memoization for Top-Down, Tabulation for Bottom-Up). Complexity decreases from exponential O(2^N) to polynomial/linear.",
    stepsData: {
      title: "Fibonacci Tabulation DP (N=5)",
      steps: [
        { array: [0, 1, null, null, null, null], pointers: { i: 1 }, description: "Base cases: DP[0] = 0, DP[1] = 1." },
        { array: [0, 1, 1, null, null, null], pointers: { i: 2 }, description: "DP[2] = DP[1] + DP[0] = 1 + 0 = 1." },
        { array: [0, 1, 1, 2, null, null], pointers: { i: 3 }, description: "DP[3] = DP[2] + DP[1] = 1 + 1 = 2." },
        { array: [0, 1, 1, 2, 3, null], pointers: { i: 4 }, description: "DP[4] = DP[3] + DP[2] = 2 + 1 = 3." },
        { array: [0, 1, 1, 2, 3, 5], pointers: { i: 5 }, description: "DP[5] = DP[4] + DP[3] = 3 + 2 = 5. Done!" }
      ]
    },
    questions: [
      { title: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs" },
      { title: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change" },
      { title: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence" }
    ],
    explanation: "To formulate a DP solution: 1) Identify state parameters. 2) Write the recurrence relation. 3) Define base cases. 4) Fill table bottom-up or memoize top-down."
  }
};
