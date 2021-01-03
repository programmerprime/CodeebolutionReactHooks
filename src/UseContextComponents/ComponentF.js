import React from "react";
import { ChannelContext, LoveContext, UserContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <LoveContext.Consumer>
                    {(love) => {
                      return (
                        <div>
                          <h1>{love}</h1>
                          <h4>
                            {user.name} {user.age} {user.department}
                          </h4>
                          <div>
                            {channel.map((chan, index) => (
                              <p key={index}>{chan}</p>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  </LoveContext.Consumer>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
