dic= {'one':'하나', 'two': '둘'}
el = input('키와 값을 입력하세요(:로 구분): ')
el=el.split(':')
dic[el[0]]=el[1]

print(dic)
