import React, { Component } from 'react';

export class Polish extends Component {
    
    render()
    {
        return(
            <div>
                <p>Polski</p>
                <br />

                <table>
                    <tr>
                        <td>
                            Wpłata pieniędzy na konto
                        </td>

                        <td>
                            Wypłata pieniędzy z konta
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Sprawdź stan konta
                        </td>

                        <td>
                            Wykonaj przelew
                        </td>
                    </tr>
                </table>

            </div>

        );
    }

}