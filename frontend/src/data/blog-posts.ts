import type { BlogPost } from "@/types/blog"

// Sample blog post (existing code)
export const sampleBlogPost: BlogPost = {
  id: "1",
  slug: "scalable-data-pipelines",
  title: "Building Scalable Data Pipelines with Apache Airflow",
  excerpt:
    "Learn how to design and implement scalable, maintainable data pipelines using Apache Airflow for orchestration.",
  content: `# Building Scalable Data Pipelines with Apache Airflow

Data pipelines are the backbone of any data-driven organization. They ensure that data flows smoothly from various sources to destinations where it can be analyzed and used for decision-making. Apache Airflow has emerged as one of the most popular tools for building and managing these pipelines.

## What is Apache Airflow?

Apache Airflow is an open-source platform to programmatically author, schedule, and monitor workflows. It was created at Airbnb in 2014 to manage the company's increasingly complex workflows and was later donated to the Apache Software Foundation.

Airflow uses directed acyclic graphs (DAGs) to represent workflows. Each node in the graph is a task, and edges define dependencies between tasks. This structure allows for complex pipeline creation while maintaining clarity about how data flows through the system.

## Key Features of Apache Airflow

### 1. Dynamic Pipeline Generation

Airflow allows you to define pipelines programmatically, which means you can generate them dynamically based on configurations or other parameters.

\`\`\`python
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python_operator import PythonOperator

default_args = {
    'owner': 'data_engineer',
    'depends_on_past': False,
    'start_date': datetime(2023, 1, 1),
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'sample_data_pipeline',
    default_args=default_args,
    description='A simple data pipeline',
    schedule_interval=timedelta(days=1),
)

def extract_data():
    # Extract data from source
    pass

def transform_data():
    # Transform the extracted data
    pass

def load_data():
    # Load the transformed data
    pass

extract_task = PythonOperator(
    task_id='extract',
    python_callable=extract_data,
    dag=dag,
)

transform_task = PythonOperator(
    task_id='transform',
    python_callable=transform_data,
    dag=dag,
)

load_task = PythonOperator(
    task_id='load',
    python_callable=load_data,
    dag=dag,
)

extract_task >> transform_task >> load_task
\`\`\`

### 2. Scalability

Airflow's architecture allows it to scale horizontally. You can add more workers to handle an increasing number of tasks without changing your DAG definitions.

### 3. Monitoring and Alerting

The Airflow UI provides comprehensive monitoring capabilities, allowing you to track the status of your pipelines and receive alerts when issues arise.

## Best Practices for Building Scalable Pipelines

### 1. Keep Tasks Atomic

Each task in your DAG should do one thing and do it well. This makes it easier to retry failed tasks and understand what each part of your pipeline is doing.

### 2. Use Idempotent Tasks

Tasks should be idempotent, meaning they can be run multiple times without causing unintended side effects. This is crucial for reliability, as it allows you to safely retry failed tasks.

### 3. Implement Proper Error Handling

Make sure your tasks have proper error handling to prevent pipeline failures. Use try-except blocks and consider implementing custom error handlers.

### 4. Monitor Pipeline Performance

Regularly monitor the performance of your pipelines to identify bottlenecks and optimize accordingly. Airflow provides metrics that can be integrated with monitoring tools like Prometheus and Grafana.

## Conclusion

Apache Airflow provides a powerful framework for building scalable, maintainable data pipelines. By following best practices and leveraging Airflow's features, you can create robust pipelines that reliably move and transform your data.

In future posts, we'll dive deeper into specific aspects of Airflow, such as custom operators, sensors, and advanced scheduling techniques.
  `,
  coverImage: "/placeholder.svg?height=600&width=1200",
  date: "May 15, 2023",
  readTime: "8 min read",
  category: "Data Engineering",
  tags: ["Apache Airflow", "Data Pipelines", "ETL", "Data Engineering", "Workflow Management"],
  author: {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    title: "Senior Data Engineer",
  },
  relatedPosts: [
    {
      id: "2",
      slug: "data-mesh-architecture",
      title: "Data Mesh Architecture: A Modern Approach to Data Management",
      excerpt: "Explore the data mesh paradigm and how it transforms data architecture by treating data as a product.",
      coverImage: "/placeholder.svg?height=200&width=400",
      category: "Architecture",
    },
    {
      id: "3",
      slug: "real-time-analytics-kafka",
      title: "Real-time Analytics with Kafka and ksqlDB",
      excerpt:
        "Discover how to build real-time analytics solutions using Kafka streams and ksqlDB for continuous data processing.",
      coverImage: "/placeholder.svg?height=200&width=400",
      category: "Real-time Analytics",
    },
    {
      id: "4",
      slug: "optimizing-spark-jobs",
      title: "Optimizing Spark Jobs for Performance",
      excerpt:
        "Tips and techniques for optimizing Apache Spark jobs to improve performance and reduce resource consumption.",
      coverImage: "/placeholder.svg?height=200&width=400",
      category: "Performance",
    },
  ],
}

// Extended list of blog posts for pagination
export const allBlogPosts: BlogPost[] = [
  sampleBlogPost,
  {
    id: "2",
    slug: "data-mesh-architecture",
    title: "Data Mesh Architecture: A Modern Approach to Data Management",
    excerpt: "Explore the data mesh paradigm and how it transforms data architecture by treating data as a product.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "April 3, 2023",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Data Mesh", "Data Architecture", "Data Management", "Domain-Driven Design"],
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Architect",
    },
  },
  {
    id: "3",
    slug: "real-time-analytics-kafka",
    title: "Real-time Analytics with Kafka and ksqlDB",
    excerpt:
      "Discover how to build real-time analytics solutions using Kafka streams and ksqlDB for continuous data processing.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 12, 2023",
    readTime: "7 min read",
    category: "Real-time Analytics",
    tags: ["Kafka", "ksqlDB", "Real-time Analytics", "Stream Processing"],
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Streaming Specialist",
    },
  },
  {
    id: "4",
    slug: "optimizing-spark-jobs",
    title: "Optimizing Spark Jobs for Performance",
    excerpt:
      "Tips and techniques for optimizing Apache Spark jobs to improve performance and reduce resource consumption.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "February 28, 2023",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Apache Spark", "Performance Optimization", "Big Data", "Data Processing"],
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Data Engineer",
    },
  },
  {
    id: "5",
    slug: "data-quality-monitoring",
    title: "Data Quality Monitoring in Modern Data Stacks",
    excerpt: "Implementing robust data quality monitoring to ensure reliable analytics and machine learning models.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "January 15, 2023",
    readTime: "6 min read",
    category: "Data Quality",
    tags: ["Data Quality", "Data Monitoring", "Data Observability", "Data Reliability"],
    author: {
      name: "Emily Wong",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Quality Engineer",
    },
  },
  {
    id: "6",
    slug: "feature-store-ml",
    title: "Building a Feature Store for Machine Learning",
    excerpt:
      "How to design and implement a feature store to standardize feature engineering and improve ML model training.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "December 10, 2022",
    readTime: "11 min read",
    category: "Machine Learning",
    tags: ["Feature Store", "Machine Learning", "MLOps", "Feature Engineering"],
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "ML Engineer",
    },
  },
  {
    id: "7",
    slug: "data-governance-best-practices",
    title: "Data Governance Best Practices for Enterprise Organizations",
    excerpt: "Establishing effective data governance frameworks to ensure data security, quality, and compliance.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "November 5, 2022",
    readTime: "8 min read",
    category: "Data Governance",
    tags: ["Data Governance", "Compliance", "Data Security", "Enterprise Data"],
    author: {
      name: "Jennifer Lee",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Governance Lead",
    },
  },
  {
    id: "8",
    slug: "dbt-data-transformation",
    title: "Modern Data Transformation with dbt",
    excerpt: "Leveraging dbt (data build tool) for creating modular, testable, and documented data transformations.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "October 18, 2022",
    readTime: "7 min read",
    category: "Data Transformation",
    tags: ["dbt", "Data Transformation", "SQL", "Analytics Engineering"],
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Data Engineer",
    },
  },
  {
    id: "9",
    slug: "data-lakehouse-architecture",
    title: "Data Lakehouse: Combining the Best of Data Lakes and Data Warehouses",
    excerpt:
      "Exploring the data lakehouse architecture that brings together the flexibility of data lakes with the performance of data warehouses.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "September 22, 2022",
    readTime: "9 min read",
    category: "Architecture",
    tags: ["Data Lakehouse", "Data Lake", "Data Warehouse", "Modern Data Stack"],
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Architect",
    },
  },
  {
    id: "10",
    slug: "streaming-data-processing",
    title: "Streaming Data Processing Patterns and Anti-patterns",
    excerpt: "Common patterns and pitfalls to avoid when implementing streaming data processing solutions.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "August 14, 2022",
    readTime: "10 min read",
    category: "Stream Processing",
    tags: ["Stream Processing", "Real-time Data", "Event Streaming", "Data Patterns"],
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Streaming Specialist",
    },
  },
  {
    id: "11",
    slug: "data-contracts",
    title: "Implementing Data Contracts for Reliable Data Exchange",
    excerpt:
      "How to establish data contracts between producers and consumers to ensure reliable data exchange and prevent breaking changes.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "July 8, 2022",
    readTime: "8 min read",
    category: "Data Engineering",
    tags: ["Data Contracts", "Data Reliability", "Schema Management", "Data Exchange"],
    author: {
      name: "Emily Wong",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Quality Engineer",
    },
  },
  {
    id: "12",
    slug: "data-catalog-implementation",
    title: "Building an Effective Data Catalog for Data Discovery",
    excerpt:
      "Strategies for implementing a comprehensive data catalog to improve data discovery and understanding across the organization.",
    content: "Full content would go here...",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "June 20, 2022",
    readTime: "7 min read",
    category: "Data Management",
    tags: ["Data Catalog", "Data Discovery", "Metadata Management", "Data Documentation"],
    author: {
      name: "Jennifer Lee",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Data Governance Lead",
    },
  },
]

// Pagination interface
export interface PaginatedResult<T> {
  data: T[]
  pagination: {
    total: number
    pageSize: number
    currentPage: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

// Function to get paginated blog posts
export const getPaginatedBlogPosts = (page = 1, pageSize = 6): PaginatedResult<BlogPost> => {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedPosts = allBlogPosts.slice(startIndex, endIndex)

  return {
    data: paginatedPosts,
    pagination: {
      total: allBlogPosts.length,
      pageSize,
      currentPage: page,
      totalPages: Math.ceil(allBlogPosts.length / pageSize),
      hasNextPage: endIndex < allBlogPosts.length,
      hasPrevPage: page > 1,
    },
  }
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  // In a real application, this would fetch from an API
  return allBlogPosts.find((post) => post.slug === slug)
}

export const getAllBlogPosts = (): BlogPost[] => {
  // In a real application, this would fetch all posts from an API
  return allBlogPosts
}
