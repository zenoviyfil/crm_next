import React from 'react';
import { Status } from '@/app/components/status-label';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import AddCompanyButton from '../../components/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}