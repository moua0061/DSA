def find_product(lst):
    # Write your code here
    prod = 1
    for num in lst:
        prod *= num
    return prod
print(find_product([1, 2, 3]))
print(find_product([2, 4, 6]))

def in_range(nums, min_val, max_val):
    # Write your code here
    results = []
    for num in nums:
        if num > min_val and num < max_val:
            results.append(num)
    return results
print(in_range([1, 2, 3, 4, 5], 1, 5))
print(in_range([8, 6, 4], 2, 10))