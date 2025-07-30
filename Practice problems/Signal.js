// red = stop
// green = go
// yellow = slow down or go fast 😂

function signal(color) {
  if (color == "red") {
    return "🔴 STOP";
  } else if (color == "green") {
    return "🟢 Go";
  } else {
    return "🟡 Slow down or Go fast 😂";
  }
}

console.log(signal("red"));
console.log(signal("green"));
console.log(signal("yellow"));
