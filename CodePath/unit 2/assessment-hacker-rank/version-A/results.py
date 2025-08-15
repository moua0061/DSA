my_list = ['a', 'b', 'c', 'd']
print(my_list[1:3])

my_dict = {'a':[1, 2], 'b': [3, 4], 'c': [5, 6]}
output = []
for item in my_dict:
    #print(item)
    output.append(item)
print(output)

def contains_duplicate(nums):
    # Write your code here
    twice = {}
    for num in nums:
        if num in twice:
            twice[num] += 1
        else:
            twice[num] = 1
    #print(twice)
    for value in twice.values():
        if value >= 2:
            return True
    return False
nums = [1, 2, 3, 1]
nums2 = [1, 2, 3, 4]
nums3 = [1, 1]
print(contains_duplicate(nums3))

def frequency_greater_than_n(nums, n):
    results = {}
    removed = []
    for num in nums:
        if num in results:
            results[num] += 1
        else:
            results[num] = 1
    for key, value in results.items():
        if value <= n:
            removed.append(key)
    for item in removed:
        results.pop(item)
    return results
    pass
nums4 = [1, 1, 2, 3, 3, 3, 4]
nums5 = [1, 2, 3, 4, 5]
print(frequency_greater_than_n(nums4, 1))
#print(frequency_greater_than_n(nums5, 0))