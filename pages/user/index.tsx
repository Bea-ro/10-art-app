import { useRouter } from 'next/router';

import Layout from '../../components/ui/Layout/Layout'
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Form from '../../components/ui/Form/Form';
import Text from '../../components/ui/Text/Text';

const UserPage = () => {
  
  const router = useRouter();
  const { action } = router.query;

  return (
      <Layout title={action === "register" ? "Register" : "Login"} 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.">
      <PageTitle title={action === "register" ? "Register" : "Login"}/>
      <Text text={action === "register" ? "Create your free account and start enjoying" : "Please, provide your email and password for start enjoying!"}/>
      <Form action={action}/>
      </Layout>
  
  )
}
 
export default UserPage