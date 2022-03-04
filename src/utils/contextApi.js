import React, { useState, createContext } from "react";

const UserRoleContext = createContext(null);
const UserRoleContextConsumer = UserRoleContext.Consumer;

const ContextApi = (props) => {
    const [apiData, setApiData] = useState({
        apiData: null,
    });

    // Update the details context
    const updateContext = (data) => {
        setApiData(prevState => ({
            ...prevState,
            ...data
        }));
    };


    return (
        <UserRoleContext.Provider
            value={{
                ...apiData,
                updateContext: updateContext,

            }}
        >
            {props.children}
        </UserRoleContext.Provider>
    );
};

export { UserRoleContext, ContextApi, UserRoleContextConsumer };
