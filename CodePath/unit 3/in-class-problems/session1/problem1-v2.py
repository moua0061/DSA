#with Nidhi & mohamed
#Problem 1: Perfect Match
def match_made(dictionary):
	print("----------------------------------")
	for key, value in dictionary.items():
		print( f"{key} and {value} are a perfect match.")
	pass

#Problem 2: Remove Char
def remove_char(s, n):
	print("----------------------------------")
	new_s= s[0:n] + s[n+1:]
	return new_s
s = "typpo"
print(remove_char(s, 2))

#Problem 3: Count Vowels
def vowel_count(s):
	print("----------------------------------")
	s = s.lower()
	count = 0
	vowels = ('a', 'e', 'i', 'o', 'u')
	for c in s:
		if c in vowels:
			count += 1
	return count
my_str = "hello world"
my_str2 = "aAaAaAaAAA"
my_str3 = "ths strng s mssng vwls"

count1 = vowel_count(my_str)
print(count1)
count2 = vowel_count(my_str2)
print(count2)
count3 = vowel_count(my_str3)
print(count3)

#Problem 4: Reverse Sentence
def reverse_sentence(sentence):
	print("----------------------------------")
	results = sentence.split()
	results.reverse()
	joined = " ".join(results)
	return joined
sentence = "I solemnly swear I am up to no good"
print(reverse_sentence(sentence))

#Problem 5: String Compression
def compress_string(my_str):
	print("----------------------------------")
	dict = {}
	results = ""
	for c in my_str:
		if c not in dict:
			dict[c] = 1
		else:
			dict[c] += 1
	for key, value in dict.items():
		results += key + str(value)
	if len(results) > len(my_str):
		return my_str
	return results
    #return results
    
my_str = "aaaaabbcccd"
compressed_Str = compress_string(my_str)
print(compressed_Str)

my_str2 = "abcde"
compressed_Str2 = compress_string(my_str2)
print(compressed_Str2)

#Problem 6: Needle in a Haystack
def find_the_needle(haystack, needle):
	print("----------------------------------")
	if needle not in haystack:
		return -1
	else:
		return haystack.index(needle)

haystack = "tobeornottobe"
needle = "be"
print(find_the_needle(haystack, needle))

haystack2 = "leetcode"
needle2 = "leeto"
print(find_the_needle(haystack2, needle2))
