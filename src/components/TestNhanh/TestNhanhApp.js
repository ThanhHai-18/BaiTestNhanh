import React, { useState } from "react";
import "../../CSS/TestItem.css"
import testNhanhData from "../../data/TestNhanh_data";
import TestItem from "./TestItem";

export default function TestNhanhApp(){
    const [searchItem, setSearchItem] = useState('');

    return (<div>
        <form className="form">
            <input type="text" placeholder="Nhập từ khóa tìm kiếm"
            onChange={(event) => setSearchItem(event.target.value)}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button >Tìm kiếm</button>
        </form>
        <div>
            {testNhanhData.filter(user=>user.name.toLowerCase().includes(searchItem)).map(test => 
                {return <TestItem {...test} key={test.id} />})}
        </div>
    </div>);
}
