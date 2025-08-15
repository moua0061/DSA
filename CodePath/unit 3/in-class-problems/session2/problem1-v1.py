#Problem 1: Sum of Strings
def sum_of_number_strings(nums):
    print("----------------------------------")
    sum = 0
    for num in nums:
        sum += int(num)
    return sum
    pass
nums = ["10", "20", "30"]
sum = sum_of_number_strings(nums)
print(sum)

#Problem 2: Remove Duplicates
def remove_duplicates(nums):
    print("----------------------------------")
    noDups = []
    for num in nums:
        if num not in noDups:
            noDups.append(num)
    return noDups
    pass
nums2 = [1,1,1,2,3,4,4,5,6,6]
print(remove_duplicates(nums2))

#Problem 3: Reverse Letters
def reverse_only_letters(s):
    print("----------------------------------")
    results = ""
    left = 0
    right = len(s) -1
    while left < right:
        
    pass
s = "a-bC-dEf-ghIj"
reversed_s = reverse_only_letters(s)
print(reversed_s)