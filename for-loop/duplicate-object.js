const a = [
    {label: 'All', value: 'All'},
    {label: 'All', value: 'All'},
    {label: 'Alex', value: 'Ninja'},
    {label: 'Alex', value: 'Ninja'},
    {label: 'Alex', value: 'Ninja'}
]

for (let i = 0; i < a.length; ++i)
    for (let j = 0; j < a.length; ++j)
        if (i !== j && a[i].label === a[j].label && a[i].value === a[j].value)
            a.splice(j, 1);
console.log(a);