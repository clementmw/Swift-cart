def count_sheep(n):
    sheep = [f"{i} sheep..." for i in range (1 , n+1)]
    return "".join(sheep)

n=3
print(count_sheep(n))

