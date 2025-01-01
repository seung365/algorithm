function solution(s) {
  let answer = ""
  let arr = s.split(" ")
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != " ") {
        // 공백 연속일때 문제 처리
        arr[i] = [arr[i][0].toUpperCase(), ...arr[i].slice(1).toLowerCase()].join("")
        break
      }
    }
  }
  answer = arr.join(" ")
  return answer
}

// 그래서 그냥 전체 문자열 하나씩 돌면서 s[i-1]이 " " 인지 확인해주고 그렇다면 Upper 아니면 Lower 해주는게 더 낫다.
