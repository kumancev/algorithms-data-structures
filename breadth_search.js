// Поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']


function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)  // добавляем стартовую вершину
    while (queue.length > 0) {  // пока есть хотя бы 1 элемент в queue
        const current = queue.shift()  // из начала очереди достаем текущую вершину (на 1ой итерации это стартовая вершина)
        if (!graph[current]) {   
            graph[current] = []  // если по данной вершине ничего нет => присвоить пустой массив (т.е. из этой вершины пути нет) 
        }
        if (graph[current].includes(end)) {  // если в графе по текущей вершине массив содержит конечную точку => завуршаем программу и return true
            return true  
        } else {                                   // если конечной точки нет, то добавить в queue новые вершины.
            queue = [...queue, ...graph[current]]  // разворачиваем в массив текущий queue и в конец массив, который лежит в графе по текущей вершине
        }
    }
}

console.log(breadthSearch(graph, 'a', 'g'))