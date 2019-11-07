/*
	_.filter(collection, [predicate=_.identity])
	  - 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。

	Note: Unlike _.remove, this method returns a new array.

	参数
	  - collection (Array|Object): 一个用来迭代的集合。
	  - [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。

	返回
	  - (Array): 返回一个新的过滤后的数组。

	例子
		var users = [
			{ 'user': 'barney', 'age': 36, 'active': true },
			{ 'user': 'fred',   'age': 40, 'active': false }
		];

		_.filter(users, function(o) { return !o.active; });
		// => objects for ['fred']

		// The `_.matches` iteratee shorthand.
		_.filter(users, { 'age': 36, 'active': true });
		// => objects for ['barney']

		// The `_.matchesProperty` iteratee shorthand.
		_.filter(users, ['active', false]);
		// => objects for ['fred']

		// The `_.property` iteratee shorthand.
		_.filter(users, 'active');
		// => objects for ['barney']
*/