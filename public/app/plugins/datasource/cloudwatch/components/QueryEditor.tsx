import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { CloudWatchQuery } from '../types';
import CloudWatchDatasource from '../datasource';
import { QueryFieldsEditor } from './QueryFieldsEditor';

export type Props = QueryEditorProps<CloudWatchDatasource, CloudWatchQuery>;

interface State {}

export class QueryEditor extends PureComponent<Props, State> {
  state: State = {};

  onChange(query: CloudWatchQuery) {
    const { onChange, onRunQuery } = this.props;
    onChange(query);
    onRunQuery();
  }

  render() {
    return <QueryFieldsEditor {...this.props}></QueryFieldsEditor>;
  }
}
