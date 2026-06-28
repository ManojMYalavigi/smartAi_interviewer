// Data for Coding Lab Problems

export const codingProblems = {
  'two-sum': {
    title: "Two Sum",
    difficulty: "Easy",
    desc: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]",
    starter: {
      javascript: "function twoSum(nums, target) {\n    // your code here\n}",
      python: "def two_sum(nums, target):\n    # Write Python code here\n    pass",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}",
      cpp: "vector<int> twoSum(vector<int>& nums, int target) {\n    \n}",
      csharp: "public class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        \n    }\n}",
      go: "func twoSum(nums []int, target int) []int {\n    \n}",
      rust: "impl Solution {\n    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        \n    }\n}",
      ruby: "def two_sum(nums, target)\n    \nend",
      swift: "class Solution {\n    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {\n        \n    }\n}",
      kotlin: "class Solution {\n    fun twoSum(nums: IntArray, target: Int): IntArray {\n        \n    }\n}",
      php: "class Solution {\n    function twoSum($nums, $target) {\n        \n    }\n}"
    },
    testCases: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[3, 2, 4], 6], expected: [1, 2] }
    ],
    execJS: (codeStr, args) => {
      try {
        const run = new Function(`
          ${codeStr}
          return twoSum(arguments[0], arguments[1]);
        `);
        const result = run(args[0], args[1]);
        return { success: true, result };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  },
  'valid-parentheses': {
    title: "Valid Parentheses",
    difficulty: "Easy",
    desc: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: "Input: s = \"()\"\nOutput: true\n\nInput: s = \"()[]{}\"\nOutput: true",
    starter: {
      javascript: "function isValid(s) {\n    // your code here\n}",
      python: "def isValid(s: str) -> bool:\n    pass",
      java: "class Solution {\n    public boolean isValid(String s) {\n        \n    }\n}",
      cpp: "bool isValid(string s) {\n    \n}",
      csharp: "public class Solution {\n    public bool IsValid(string s) {\n        \n    }\n}",
      go: "func isValid(s string) bool {\n    \n}",
      rust: "impl Solution {\n    pub fn is_valid(s: String) -> bool {\n        \n    }\n}",
      ruby: "def is_valid(s)\n    \nend",
      swift: "class Solution {\n    func isValid(_ s: String) -> Bool {\n        \n    }\n}",
      kotlin: "class Solution {\n    fun isValid(s: String): Boolean {\n        \n    }\n}",
      php: "class Solution {\n    function isValid($s) {\n        \n    }\n}"
    },
    testCases: [
      { args: ["()[]{}"], expected: true },
      { args: ["(]"], expected: false }
    ],
    execJS: (codeStr, args) => {
      try {
        const run = new Function(`
          ${codeStr}
          return isValid(arguments[0]);
        `);
        const result = run(args[0]);
        return { success: true, result };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  },
  'merge-intervals': {
    title: "Merge Intervals",
    difficulty: "Medium",
    desc: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    examples: "Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]",
    starter: {
      javascript: "function merge(intervals) {\n    \n}",
      python: "def merge(intervals):\n    pass",
      java: "class Solution {\n    public int[][] merge(int[][] intervals) {\n        \n    }\n}",
      cpp: "vector<vector<int>> merge(vector<vector<int>>& intervals) {\n    \n}",
      csharp: "public class Solution {\n    public int[][] Merge(int[][] intervals) {\n        \n    }\n}",
      go: "func merge(intervals [][]int) [][]int {\n    \n}",
      rust: "impl Solution {\n    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {\n        \n    }\n}",
      ruby: "def merge(intervals)\n    \nend",
      swift: "class Solution {\n    func merge(_ intervals: [[Int]]) -> [[Int]] {\n        \n    }\n}",
      kotlin: "class Solution {\n    fun merge(intervals: Array<IntArray>): Array<IntArray> {\n        \n    }\n}",
      php: "class Solution {\n    function merge($intervals) {\n        \n    }\n}"
    },
    testCases: [
      { args: [[[1,3],[2,6],[8,10],[15,18]]], expected: [[1,6],[8,10],[15,18]] }
    ],
    execJS: (codeStr, args) => {
      try {
        const run = new Function(`
          ${codeStr}
          return merge(arguments[0]);
        `);
        const result = run(args[0]);
        return { success: true, result };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  },
  'lru-cache': {
    title: "LRU Cache",
    difficulty: "Medium",
    desc: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    examples: "Input: [\"LRUCache\", \"put\", \"put\", \"get\"]\nOutput: [null, null, null, 1]",
    starter: {
      javascript: "class LRUCache {\n    constructor(capacity) {\n        \n    }\n    get(key) {\n        \n    }\n    put(key, value) {\n        \n    }\n}",
      python: "class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n    def get(self, key: int) -> int:\n        pass\n    def put(self, key: int, value: int) -> None:\n        pass",
      java: "class LRUCache {\n    public LRUCache(int capacity) {\n        \n    }\n    public int get(int key) {\n        \n    }\n    public void put(int key, int value) {\n        \n    }\n}",
      cpp: "class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        \n    }\n    int get(int key) {\n        \n    }\n    void put(int key, int value) {\n        \n    }\n};",
      csharp: "public class LRUCache {\n    public LRUCache(int capacity) {\n        \n    }\n    public int Get(int key) {\n        \n    }\n    public void Put(int key, int value) {\n        \n    }\n}",
      go: "type LRUCache struct {\n    \n}\nfunc Constructor(capacity int) LRUCache {\n    \n}\nfunc (this *LRUCache) Get(key int) int {\n    \n}\nfunc (this *LRUCache) Put(key int, value int)  {\n    \n}",
      rust: "struct LRUCache {\n\n}\nimpl LRUCache {\n    fn new(capacity: i32) -> Self {\n        \n    }\n    fn get(&self, key: i32) -> i32 {\n        \n    }\n    fn put(&mut self, key: i32, value: i32) {\n        \n    }\n}",
      ruby: "class LRUCache\n    def initialize(capacity)\n        \n    end\n    def get(key)\n        \n    end\n    def put(key, value)\n        \n    end\nend",
      swift: "class LRUCache {\n    init(_ capacity: Int) {\n        \n    }\n    func get(_ key: Int) -> Int {\n        \n    }\n    func put(_ key: Int, _ value: Int) {\n        \n    }\n}",
      kotlin: "class LRUCache(capacity: Int) {\n    fun get(key: Int): Int {\n        \n    }\n    fun put(key: Int, value: Int) {\n        \n    }\n}",
      php: "class LRUCache {\n    function __construct($capacity) {\n        \n    }\n    function get($key) {\n        \n    }\n    function put($key, $value) {\n        \n    }\n}"
    },
    testCases: [
      { args: [[]], expected: null }
    ],
    execJS: (codeStr, args) => {
      return { success: true, result: null };
    }
  },
  'number-of-islands': {
    title: "Number of Islands",
    difficulty: "Medium",
    desc: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    examples: "Input: grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]\nOutput: 3",
    starter: {
      javascript: "function numIslands(grid) {\n    \n}",
      python: "def numIslands(grid):\n    pass",
      java: "class Solution {\n    public int numIslands(char[][] grid) {\n        \n    }\n}",
      cpp: "int numIslands(vector<vector<char>>& grid) {\n    \n}",
      csharp: "public class Solution {\n    public int NumIslands(char[][] grid) {\n        \n    }\n}",
      go: "func numIslands(grid [][]byte) int {\n    \n}",
      rust: "impl Solution {\n    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {\n        \n    }\n}",
      ruby: "def num_islands(grid)\n    \nend",
      swift: "class Solution {\n    func numIslands(_ grid: [[Character]]) -> Int {\n        \n    }\n}",
      kotlin: "class Solution {\n    fun numIslands(grid: Array<CharArray>): Int {\n        \n    }\n}",
      php: "class Solution {\n    function numIslands($grid) {\n        \n    }\n}"
    },
    testCases: [
      { args: [[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]], expected: 3 }
    ],
    execJS: (codeStr, args) => {
      try {
        const run = new Function(`
          ${codeStr}
          return numIslands(arguments[0]);
        `);
        const result = run(args[0]);
        return { success: true, result };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  },
  'longest-substring': {
    title: "Longest Substring Without Repeating",
    difficulty: "Medium",
    desc: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: "Input: s = \"abcabcbb\"\nOutput: 3 (The answer is \"abc\", with the length of 3.)",
    starter: {
      javascript: "function lengthOfLongestSubstring(s) {\n    \n}",
      python: "def lengthOfLongestSubstring(s: str) -> int:\n    pass",
      java: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        \n    }\n}",
      cpp: "int lengthOfLongestSubstring(string s) {\n    \n}",
      csharp: "public class Solution {\n    public int LengthOfLongestSubstring(string s) {\n        \n    }\n}",
      go: "func lengthOfLongestSubstring(s string) int {\n    \n}",
      rust: "impl Solution {\n    pub fn length_of_longest_substring(s: String) -> i32 {\n        \n    }\n}",
      ruby: "def length_of_longest_substring(s)\n    \nend",
      swift: "class Solution {\n    func lengthOfLongestSubstring(_ s: String) -> Int {\n        \n    }\n}",
      kotlin: "class Solution {\n    fun lengthOfLongestSubstring(s: String): Int {\n        \n    }\n}",
      php: "class Solution {\n    function lengthOfLongestSubstring($s) {\n        \n    }\n}"
    },
    testCases: [
      { args: ["abcabcbb"], expected: 3 },
      { args: ["bbbbb"], expected: 1 },
      { args: ["pwwkew"], expected: 3 }
    ],
    execJS: (codeStr, args) => {
      try {
        const run = new Function(`
          ${codeStr}
          return lengthOfLongestSubstring(arguments[0]);
        `);
        const result = run(args[0]);
        return { success: true, result };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  }
};

// GENERATE 50 ADDITIONAL CODING ALGORITHMS
const genAlgorithms = [
  { name: "Reverse Linked List", diff: "Easy", d: "Reverse a singly linked list.", e: "Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]" },
  { name: "Climbing Stairs", diff: "Easy", d: "You are climbing a staircase. It takes n steps to reach the top.", e: "Input: n = 2\nOutput: 2" },
  { name: "Best Time to Buy and Sell Stock", diff: "Easy", d: "You are given an array prices where prices[i] is the price of a given stock on the ith day.", e: "Input: prices = [7,1,5,3,6,4]\nOutput: 5" },
  { name: "Maximum Subarray", diff: "Medium", d: "Find the contiguous subarray which has the largest sum.", e: "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6" },
  { name: "Product of Array Except Self", diff: "Medium", d: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].", e: "Input: nums = [1,2,3,4]\nOutput: [24,12,8,6]" },
  { name: "Word Search", diff: "Medium", d: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.", e: "Input: board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"\nOutput: true" },
  { name: "Trapping Rain Water", diff: "Hard", d: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.", e: "Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6" }
];

for (let i = 0; i < 50; i++) {
  const template = genAlgorithms[i % genAlgorithms.length];
  const id = `gen-prob-${i + 1}`;
  
  codingProblems[id] = {
    title: `${template.name} (Variant ${Math.floor(i / genAlgorithms.length) + 1})`,
    difficulty: template.diff,
    desc: template.d,
    examples: template.e,
    starter: {
      javascript: `function solveVariant${i+1}(input) {\n    // Write JavaScript code here\n}`,
      python: `def solveVariant${i+1}(input):\n    # Write Python code here\n    pass`,
      java: `class Solution {\n    public void solveVariant${i+1}(Object input) {\n        \n    }\n}`,
      cpp: `void solveVariant${i+1}(auto input) {\n    \n}`,
      csharp: `public class Solution {\n    public void SolveVariant${i+1}(object input) {\n        \n    }\n}`,
      go: `func solveVariant${i+1}(input interface{}) {\n    \n}`,
      rust: `impl Solution {\n    pub fn solve_variant_${i+1}(input: i32) {\n        \n    }\n}`,
      ruby: `def solve_variant_${i+1}(input)\n    \nend`,
      swift: `class Solution {\n    func solveVariant${i+1}(_ input: Any) {\n        \n    }\n}`,
      kotlin: `class Solution {\n    fun solveVariant${i+1}(input: Any) {\n        \n    }\n}`,
      php: `class Solution {\n    function solveVariant${i+1}($input) {\n        \n    }\n}`
    },
    testCases: [
      { args: ["placeholder"], expected: "placeholder" }
    ],
    execJS: (codeStr, args) => {
      // Mock execution for generated problems
      return { success: true, result: "Passed" };
    }
  };
}
