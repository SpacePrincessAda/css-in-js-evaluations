import random
import json

random.seed(1)
GROUP_COUNT = 20

groups = []
for i in range(GROUP_COUNT):
    boxes = []
    for k in range(4):
        boxes.append({
            'text': 'checkbox_{}'.format(k),
            'value': random.choice([True, False]),
            'isDisabled': False,
        })

    groups.append({
        'name': 'Some Name {}'.format(i),
        'roles': [
            {
                'value': random.randint(0, 5),
                'isDisabled': False,
            },
        ],
        'isSelected': False,
        'boxes': boxes,
    })

initial_data = json.dumps(groups, indent=2)

groups[0]['isSelected'] = True
for box in groups[0]['boxes']:
    box['value'] = not box['value']

for group in groups[1:]:
    for role in group['roles']:
        role['isDisabled'] = True
    for box in group['boxes']:
        box['isDisabled'] = True

update_data = json.dumps(groups, indent=2)

data = '''\
const initial = {0};

const update = {1};

export default {{
  initial,
  update,
}};
'''.format(initial_data, update_data)

with open('tests/data.js', 'w') as f:
    f.write(data)

