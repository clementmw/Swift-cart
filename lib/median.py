
def find_median(arr):
    arr.sort()
    
    if len(arr) % 2 == 0:
        return (arr[len(arr) // 2] + arr[len(arr) // 2 - 1]) / 2
    else:
        return arr[len(arr) // 2]
arr = [1, 2, 5, 4, 3,7,6]
print(find_median(arr))
