import React, { Component } from 'react';

export class English extends Component {

    render()
    {
        return(
            <div>
                <p>English</p>
                <br />
                <table>
                    <tr>
                        <td>
                            Payment of money to the account
                        </td>

                        <td>
                            Withdrawal of money from the account
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Check account balance
                        </td>

                        <td>
                            Make transfer
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}