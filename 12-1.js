const sheepCounter = (num) => { //input: num = 3

  for (let i = num; i > 0; i--) {
    console.log(`${i}: Another Sheep jumps over the fence`)
  }

  console.log(`All sheep jumped over the fence`)
}

sheepCounter(4);