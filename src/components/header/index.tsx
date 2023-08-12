import Appbar from '@/components/header/appbar';
import { useQuery } from '@apollo/client';
import COMPANIES_MENU_QUERY from '@/graphql/queries/companies.query.graphql';
import { Company } from '@/ts/company/company.type';

export default function Header() {
  const { data: companiesMenu, loading } = useQuery<{ companies: Company[] }>(
    COMPANIES_MENU_QUERY,
  );
  return <Appbar companiesMenu={companiesMenu?.companies} />;
}
