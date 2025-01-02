class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = false;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
//Time complexity : O(w), where w is the length of the word. Each character in the word is inserted in the trie data structure.
//Space complexity : O(w), where w is the length of the word. The space occupied by the trie data structure depends on the number of characters in the word.
Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!curr.children.has(word[i])) {
      curr.children.set(word[i], new TrieNode());
    }
    curr = curr.children.get(word[i]);
  }
  curr.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
//Time complexity : O(w), where w is the length of the word. In each step of the algorithm, we search for the next character of the word in the trie data structure.
//Space complexity : O(1)
Trie.prototype.search = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!curr.children.has(word[i])) return false;
    curr = curr.children.get(word[i]);
  }
  return curr.word;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// Time complexity : O(w), where w is the length of the prefix. In each step of the algorithm, we search for the next character of the prefix in the trie data structure.
// Space complexity : O(1)
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (!curr.children.has(prefix[i])) return false;
    curr = curr.children.get(prefix[i]);
  }
  return true;
};

/*
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
*/
