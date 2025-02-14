import styles from "../../styles/Collections.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  Check,
} from "@mui/icons-material";
import Head from "next/head";
import ProductsList from "@/components/ProductsList";
import { FilterAltOutlined } from "@mui/icons-material";
import axios from "axios";
import Router, { useRouter } from "next/router";
import FilterBar from "@/components/FilterBar";
import { Box } from "@mui/system";
import { Pagination } from "@material-ui/lab";
import usePagination from "@/components/Pagination";
import FilterBarDesktop from "@/components/FilterBarDesktop";
const Collections = (props) => {
// console.log(props.products.products,'props.products.products')
  const { asPath } = useRouter();
  const router = useRouter();
  //console.log(asPath[0]);
  let [page, setPage] = useState(1);      
  let [data, setData] = useState(props.products.products);
  
  const [open, setOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState(true);
  const [minPrice, setMinPrice] = useState(props.initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(props.initialMaxPrice);
  const [sortBy, setSortBy] = useState(props.initialSortBy);
  const [sortOrder, setSortOrder] = useState(props.initialSortOrder);
  const [selectedCategory, setSelectedCategory] = useState(
    props.initialCategory
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    props.initialSubCategory
  );
  const [selectedModel, setSelectedModel] = useState(
    props.initialModel
  );


  
  const count = Math.ceil(props.products.count / 20);


  const _DATA = usePagination(data, 20);

  const handleChange = (e, p) => { 

    setPage(p);
    setData(props.products.products)
    // _DATA.jump(p);
  };




  useEffect(() => {
    // console.log(page,"page")
    const url = {
      pathname: asPath,
      query: {
        sortBy: sortBy,
        sortOrder: sortOrder,
        minPrice: minPrice,
        maxPrice: maxPrice,

      },
    };

    if (
      page > 1 ||
      sortBy !== "" ||
      sortOrder !== "" ||
      minPrice !== "" ||
      maxPrice !== "" ||
      selectedSubCategory !== "" ||
      selectedModel !== ""
    ) {
      router.push(
        `${
          `/collections/${selectedCategory}?selectedSubCategory=${selectedSubCategory}`
        }&selectedModel=${selectedModel}&sortBy=${sortBy}&sortOrder=${sortOrder}&minPrice=${minPrice}&maxPrice=${maxPrice}&limit=20&page=${page}`
      );
    }
  }, [page,  sortBy, sortOrder, minPrice, maxPrice]);

  useEffect(() => {

 
    if (selectedCategory !== "") {
      router.push(`/collections/${selectedCategory}?selectedSubCategory=${selectedSubCategory}&selectedModel=${selectedModel}&limit=20&page=${1}`);
    } 
 
  
  }, [selectedCategory,selectedSubCategory ,selectedModel]);

  const handleSort = (e) => {
    if (e.target.value == "Price, low to high") {
      setSortBy("price");
      setSortOrder("asc");
    }
    if (e.target.value == "Price, high to low") {
      setSortBy("price");
      setSortOrder("desc");
    }
    if (e.target.value == "Alphabetically, A-Z") {
      setSortBy("title");
      setSortOrder("asc");
    }
    if (e.target.value == "Alphabetically, Z-A") {
      setSortBy("title");
      setSortOrder("desc");
    }
    if (e.target.value == "Date, old to new") {
      setSortBy("createdAt");
      setSortOrder("asc");
    }
    if (e.target.value == "Date, new to old") {
      setSortBy("createdAt");
      setSortOrder("desc");
    }
  };
  const handleFilter = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };
  const handleCategories = (cat) => {
    // console.log(cat ,"cat")
    setSelectedCategory(cat._id);
    setSelectedSubCategory("");
    setSelectedModel("")
  };
  const handleSubCategories = (cat, sub) => {
    setSelectedCategory("")
    setSelectedModel("")
    // console.log(cat, 'cat')
    // console.log(sub,'sub')
    setSelectedCategory(cat._id);

    setSelectedSubCategory(sub._id);
  };

  const handleModels = (cat , model) => {
    setSelectedCategory("")
    setSelectedSubCategory("")
    console.log(cat, 'cat')
    console.log(model,'model')
    setSelectedCategory(cat._id);

    setSelectedModel(model._id);
  }

  return (
    <div className={styles.babaContainer}>
      <Head>
        <title>{props.categoryIdProps.name}</title>
        <meta name="description" content="Tesla Lighting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <FilterBar
          setOpen={setOpen}
          open={open}
          handleFilter={handleFilter}
          categoryProps={props.categoryProps}
          handleCategories={handleCategories}
          handleSubCategories={handleSubCategories}
          handleModels={handleModels}
        />
      </Box>

      <div className={styles.left}>
      <FilterBarDesktop
          setOpenDesktop={setOpenDesktop}
          openDesktop={openDesktop}
          handleFilter={handleFilter}
          categoryProps={props.categoryProps}
          handleCategories={handleCategories}
          handleSubCategories={handleSubCategories}
          handleModels={handleModels}
        />
      </div>

      <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_GAID}/${props?.categoryIdProps?.image?.path}')`,
        }}
      >
        <h1 className={`primaryText ${styles.title}`}>
          {props?.categoryIdProps?.name}
        </h1>
      </div>
      <div className={`innerWidth  yPaddings  ${styles.wrapper}`}>
        <div className={styles.filterContainer}>
          <button className={styles.filter} onClick={() => setOpen(true)}>
            <FilterAltOutlined />
            <span className={styles.filterText}>Categories</span>
          </button>
          <div className={` secondaryText ${styles.number}`}>
            {props?.products?.count} products
          </div>

          <div className={styles.sorting}>
            <select name="sort" onChange={handleSort}>
              {/* <option value="sort">Sort</option> */}
              {/* <option>Featured</option>
              <option>Best selling</option> */}
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
              <option>Date, old to new</option>
              <option selected>Date, new to old</option>
            </select>
          </div>
        </div>
        <ProductsList products={props.products.products} type="collections" />

        <Box
          sx={{ 
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Box>
      </div>
      </div>
      



    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  console.log(ctx.query.selectedSubCategory, "ctx.query.selectedSubCategory");

  console.log(ctx.query.selectedModel == "")
  console.log(ctx.params, "ctx.params");
  if (ctx.query.selectedSubCategory) {
    var subCategory = ctx.query.selectedSubCategory
  } else {
    var subCategory = ""
  }

  const token = ctx.req?.cookies.token || "";

  const CollectionRes = await axios.post(
    `${process.env.PRIVATE_URL}/product/search?page=${ctx.query.page}&limit=20`,
    {
      minPrice: ctx.query?.minPrice,
      maxPrice: ctx.query?.maxPrice,
      sortBy: ctx.query?.sortBy,
      sortOrder: ctx.query?.sortOrder,
      category: ctx.params.id,
      subCategory: ctx.query?.selectedSubCategory,
      model: ctx.query?.selectedModel, 
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );


  const categoryRes = await axios.get(
    `${process.env.PRIVATE_URL}/category/list`
  );
  const categoryId = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/category/${ctx.params.id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      products: CollectionRes.data.data,
      initialSortBy: "",
      initialSortOrder: "",
      initialMinPrice: "",
      initialMaxPrice: "",
      categoryProps: categoryRes.data.data,
      initialCategory: ctx.params.id,
      initialSubCategory: subCategory,
      initialModel:"",
      initialPage:ctx.query.page || null,
   
      categoryIdProps: categoryId.data.data,
    },
  };
};

export default Collections;