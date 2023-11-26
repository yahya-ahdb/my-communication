import { useLocation, useNavigate } from "react-router-dom";
import { HTMLDisplay } from "../../components/utils/HTMLDisplay";
import {
  useGetArticleByIdQuery,
  useGetRelatedArticleQuery,
} from "../../store/RtkSlices/articles";
import Loader from "../../components/utils/Loader";
import { apiStorge } from "../../constans/url";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

function ArticleDetails() {
  const { state } = useLocation();
  const { data, isLoading } = useGetArticleByIdQuery( state?.id );
  const { data: dataD, isLoading: loading, status } = useGetRelatedArticleQuery( { id: state?.id } );
  console.log( state )
  const navigate = useNavigate()
  useEffect( () => {
    window.scroll( 0, 0 );
  }, [ state ] );
  return (
    <div className="container">

      <div className="container">
        <h1>{ state.title }</h1>
        <div>
          <img src={ state?.img } width={ 300 } height={ 300 } />
        </div>
        <div>{ state.category }</div>

        <div style={ { margin: "80px auto" } }>
          { data && data?.content ? <HTMLDisplay html={ data?.content } /> : <div></div> }
          { isLoading || loading || !data || !dataD || status === "pending" ? <Loader /> : <div></div> }
        </div>
      </div>


      <h3>مقالات ذات صلة</h3>
      <div className='achievements-container container'>
        { dataD?.map( ( article, index ) => {
          return <ArticleCard key={ index } title={ article.title } date={ article.updated_at } category={ article.category?.value }
            img={ apiStorge + article?.image?.id + "/" + article?.image?.file_name } id={ article?.id } />
        } ) }
      </div>
    </div>
  );
}

export default ArticleDetails;
