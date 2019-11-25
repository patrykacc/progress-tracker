import React, {Fragment} from 'react';
import {List, Skeleton} from "antd";


const BaseList = ({objects, title, rowClick, fields = ['name', 'description']}) => {

    return (
        <React.Fragment>
            <List header={<div>{title}</div>}
                  dataSource={objects}
                  renderItem={object => (
                      <List.Item onClick={() => rowClick(object)}>
                          <Skeleton title={false} loading={false}>
                              <List.Item.Meta
                                  title={object[fields[0]]}
                                  description={object[fields[1]]}
                              />
                          </Skeleton>
                      </List.Item>
                  )}
            />
        </React.Fragment>
    )
};

export default BaseList;