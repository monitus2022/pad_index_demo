import { Collapse, Tabs, Select, Button } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const { Option } = Select;

const SearchBar = () => {
    const onChange = (key) => {
        console.log(key);
    };

    const awokenSkills = []
    for (let i = 1; i < 20; i++) {
        let imageUrl = `https://pad-static.chesterip.cc/awoken/skill-${i}.png`
        awokenSkills.push(<img src={imageUrl} title={i} />)
    }

    const leaderSkills =
        <div>
            <Select
                showSearch
                placeholder="Series Name"
                optionFilterProp="children"
                onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                style={{ "width": "200px" }}
            >
                <Option value="One Punch Man">One Punch Man</Option>
                <Option value="My Hero Academy">My Hero Academy</Option>
                <Option value="One Piece">One Piece</Option>
            </Select>
        </div>

    return (
        <div style={{ "width": "800px" }}>
            <Collapse defaultActiveKey={['0']} onChange={onChange}>
                <Panel showArrow={false} header="Search Pets By Filters" key="1">
                    <Tabs
                        defaultActiveKey="1" type="card" forceRender={true}
                        items={[
                            {
                                label: "Awoken Skills",
                                key: 1,
                                children: awokenSkills

                            },
                            {
                                label: "Leader Skills",
                                key: 2,
                                children: "List of leader skills"
                            },
                            {
                                label: "Series",
                                key: 3,
                                children: leaderSkills
                            },
                        ]}
                    />
                </Panel>
                <div>
                    <Button type="primary" block style={{ "background-color": "#53db78" }}>
                        Submit
                    </Button>
                </div>
            </Collapse>
        </div>
    );
};

export default SearchBar;