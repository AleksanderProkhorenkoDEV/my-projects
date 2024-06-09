'use client'

import { displayErrorMessage } from "@/lib/Static/Static"
import useEmailStore from "@/hooks/Context/useStore" // Usa import en lugar de require
import { get } from "@/lib/Requests/MaintRequest"
import { useEffect, useState } from "react"
import Grid from "@/components/Grid"

const WrapperGrid = () => {
    const userId = useEmailStore(state => state.id);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get(`/media?user_id=${userId}`);
                setData(response.data.data);
            } catch (error) {
                displayErrorMessage('No se pudieron cargar tus datos');
            }
        }
        if (userId) {
            fetchData();
        }
    }, [userId]);

    return (
        <article>
            <Grid
                isSingle
                data={data}
            />
        </article>
    );
};

export default WrapperGrid;
