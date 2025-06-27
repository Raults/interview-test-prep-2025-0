function groupAnagrams(group: string[]): string[][] {
    let anagrams: Record<string, string[]> = {};

    for (let i = 0; i < group.length; i++) {
        let sorted = group[i].split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('');
        // Add to anagrams first if not there...
        if (!anagrams[sorted]) {
            anagrams[sorted] = [];
        }
        anagrams[sorted].push(group[i]);
    }
    
    // you can just return Object.values apparently and that's that
    return Object.values(anagrams);
}