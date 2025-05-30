import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../Dashboard'
import SettingsIcon from '@mui/icons-material/Settings';
import './DataTable.css'
import { useAuth } from '../../../../utils/AuthenticationUtils';
import MusicAPI from '../../../../api/musicAPI';
export default function DataTable() {
    const {tableTags}=useContext(ThemeContext)
    const {token,user}=useAuth()
    const authToken=token
    useEffect(()=>{
        const ListUserData=async()=>{
            if (!authToken) return;
            try{
                const response=await MusicAPI.listUserMusic({},authToken)
                console.log(response)
            }catch(err){
                console.error(err)
            }
        }
        ListUserData()
    },[authToken])
    return (
        <div className='data-list-container'>
            <table>
                <thead>
                    <tr>
                        {tableTags.map((tags,index) => {
                            return (
                                <th key={index}>{tags}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Music</td>
                        <td>Something</td>
                        <td>Chill</td>
                        <td>Normal</td>
                        <td>15/24/2024</td>
                        <td className='setting'><SettingsIcon/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
