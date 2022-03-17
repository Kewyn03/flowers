import React, {useState} from "react";
import {useAppSelector} from "./hooks";
import {IRoses} from "../models/IFlower";

export const useInput = (initialValue: string) => {

    const items = useAppSelector((state) => state.flowersReducer.flowers)
    const [value, setValue] = useState(initialValue)
    const [filtered, setFiltered] = useState<IRoses[]>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value;
        if (searchText === '') {
            setFiltered([])
            setValue('')
            return
        }

        const matchedJobs = items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setValue(searchText)
        setFiltered(matchedJobs)
    };

    return {
        value,
        filtered,
        onChange: handleChange
    };
};