a = input('좋아하는 알파벳을 입력하세요:(띄워쓰기로 구분) ')
c = a.split(' ')
c.sort()


b = input('싫어하는 알파벳을 입력하세요:(띄워쓰기로 구분) ')
d = b.split(' ')
d.sort()


print(c)
print(d)
print(c[0] < d[0])