function solve(input) {
    if (input.dizziness == true) {
        input.levelOfHydrated = input.weight * input.experience * 0.1;
        input.dizziness = false;
    }
    return input;
}
solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
);  