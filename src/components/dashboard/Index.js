import React from 'react'
import Dashboard from './Style'
import Menudiv from '../menu/index'
import RecentComponent from './RecentComponent'
import RecentTransactionText from './Style'
import ServiceRequest from './ServiceRequestStyle'
import Transaction from './Transactions'
import Servicerequest from './Service_request'

export default function DashBoard() {
    return (
        <Dashboard>
            <Menudiv/>
            <RecentTransactionText>Recent Transaction</RecentTransactionText>
            <RecentComponent/>
            <ServiceRequest/>
            <Transaction/>
            
            <Servicerequest/>
            
            </Dashboard>
    )
}
