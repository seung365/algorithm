function solution(s) {
  var answer = true
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === "(" && s[i] === ")") {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  if (stack.length > 0) {
    answer = false
  }
  return answer
}

// 바로 count로 처리해도 되는 부분
