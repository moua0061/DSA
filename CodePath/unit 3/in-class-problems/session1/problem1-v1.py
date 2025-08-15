def above_threshold(lst, threshold):
    print("----------------------------------")
    results = []
    for num in lst:
        if num > threshold:
            results.append(num)
    return results
    #pass
print(above_threshold([1, 2, 3, 4, 5], 3))

#Problem 1: Calling Mississippi
def count_mississippi(limit):
    for num in range(1, limit):
	    print( f"{num} mississippi")
pass
print(count_mississippi(6))

#Problem 2: Swap Ends
def swap_ends(my_str):
    print("----------------------------------")
    results = ""
    last = my_str[len(my_str) -1]
    first = my_str[0]
    swapTemp = first
    first = last
    last = swapTemp
    results += first
    for i in range(1, len(my_str) -1):
        results += my_str[i]
    results += last
    return results
    pass
my_str = "boat"
print(swap_ends(my_str))
    
#Problem 3: Is Pangram
def is_pangram(my_str):
    print("----------------------------------")
    alphabet = ('abcdefghijklmnopqrstuvwxyz')
    my_str = my_str.lower()
    for char in my_str:
        if char not in alphabet:
            return False
        return True
strg = "The quick brown fox jumps over the lazy dog"
print(is_pangram(strg))

#Problem 4: Reverse String
def reverse_string(my_str):
    print("----------------------------------")
    reversed_str = ""
    for char in my_str:
        reversed_str = char + reversed_str
    return reversed_str
    #pass
print(reverse_string("hello"))

#Problem 5: First Unique
def first_unique_char(my_str):
    print("----------------------------------")
    for char in my_str:
        if my_str.count(char) == 1:
            return my_str.index(char)
        return -1
print(first_unique_char("leetcode"))

#Problem 6: Minimum Distance
def min_distance(words, word1, word2):
    pass
words = ["the", "quick", "brown", "fox", "jumped", "the"]
dist1 = min_distance(words, "quick", "jumped")
dist2 = min_distance(words, "the", "jumped")
print(dist1)
print(dist2)