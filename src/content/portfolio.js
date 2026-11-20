export const profile = {
  name: "Ankith Reddy Avula",
  location: "Herndon, Virginia",
  email: "ankithr005@gmail.com",
  github: "https://github.com/avulaankith",
  linkedin: "https://www.linkedin.com/in/avulaankith/",
  resume: "/Ankith-Reddy-Avula-Resume.pdf",
  headline: "Engineering reliable software. Building intelligent systems.",
  introduction:
    "I’m a Software Engineer and AI Engineer working across backend systems, cloud-native applications, enterprise data platforms, and applied AI.",
};

const professionalStatus =
  "August IT · Professional work · sanitized case study · deployment details require confirmation";

export const projects = [
  {
    slug: "financial-data-platform",
    title: "Engineering Reliable Financial Data Platforms",
    category: "Software Engineering",
    kind: "Professional experience",
    status: professionalStatus,
    cardStatus: "August IT · sanitized",
    summary:
      "A cloud lakehouse approach for consistent, incremental financial data processing across isolated environments.",
    description:
      "Resume-backed work at August IT, presented without customer data or internal implementation details.",
    requirements:
      "Support incremental changes and historical tracking across multiple data sources and DEV/UAT/PROD environments, while making validation and reruns predictable.",
    contribution:
      "The latest resume states that Ankith architected and optimized Spark-based lakehouse workflows, including orchestration, retries, checkpoints, and environment-specific deployments.",
    tradeoffs:
      "Incremental processing can reduce repeated work but requires reliable keys, change detection, and replay behavior. Partitioning and join strategies must be measured against the actual workload rather than applied as universal tuning rules.",
    lessons:
      "Data correctness, lineage, and recoverability are part of the platform contract—not cleanup tasks after the pipeline is built.",
    tags: ["Azure", "PySpark", "Delta Lake", "Data reliability"],
    stack: [
      "ADLS Gen2",
      "Azure Data Factory",
      "Azure Synapse",
      "Databricks / Spark",
      "Delta Lake",
      "Python",
    ],
    flow: [
      ["Sources", "External systems and structured inputs"],
      ["Landing", "Cloud storage and ingestion boundaries"],
      ["Transform", "Spark processing and validation"],
      ["Curated", "Delta tables for downstream use"],
      ["Consumers", "Analytics, services, and retrieval workflows"],
    ],
    sections: [
      {
        heading: "The engineering problem",
        body: "Financial data arrives in different shapes and at different times. A dependable platform needs to support incremental updates while preserving history and making failures diagnosable.",
      },
      {
        heading: "Design approach",
        body: "The resume describes an Azure lakehouse built around ADLS Gen2, Spark, Delta Lake, and Synapse, with environment-specific deployments, orchestration, retries, checkpoints, and monitoring.",
      },
      {
        heading: "Reliability and trade-offs",
        body: "Separate storage from compute, validate data at boundaries, and make reruns safe. Partitioning, joins, shuffle behavior, and adaptive execution are tuning levers; their value depends on workload shape and should be measured against a repeatable baseline.",
      },
      {
        heading: "Outcome and evidence",
        body: "The latest resume reports a 35% reduction in Spark job latency. The baseline, workload, and measurement window have not been independently verified for this portfolio.",
      },
    ],
    metric: "35% lower Spark job latency (resume-reported; verify baseline)",
    mode: ["software", "ai"],
  },
  {
    slug: "document-intelligence",
    title: "Building Enterprise Document Intelligence with RAG",
    category: "AI / ML Engineering",
    kind: "Professional experience",
    status: professionalStatus,
    cardStatus: "August IT · sanitized",
    summary:
      "Retrieval and grounded question-answering patterns for long, complex documents where evidence matters.",
    description:
      "A sanitized account of document ingestion, semantic retrieval, and grounded answers described in the latest resume.",
    requirements:
      "Retrieve relevant evidence from lengthy or scanned documents, preserve source context, and make extraction and retrieval failures visible to users.",
    contribution:
      "The latest resume describes work with Azure AI Search, Azure OpenAI, LangChain, Azure Functions, Python, and React in retrieval-augmented workflows.",
    tradeoffs:
      "Chunk size, overlap, metadata filters, and semantic versus lexical retrieval affect recall, latency, and context use. These choices should be compared on a representative evaluation set.",
    lessons:
      "A grounded answer starts with trustworthy extraction and retrieval. Evaluating only the generated response can conceal missing or irrelevant evidence.",
    tags: ["RAG", "Azure AI Search", "Evaluation", "Document systems"],
    stack: [
      "Azure OpenAI",
      "Azure AI Search",
      "LangChain",
      "Azure Functions",
      "Python",
      "React",
    ],
    flow: [
      ["Documents", "PDFs and source metadata"],
      ["Extract", "Text extraction and normalization"],
      ["Index", "Chunks, embeddings, and metadata"],
      ["Retrieve", "Semantic search with filters"],
      ["Answer", "Grounded response with source evidence"],
    ],
    sections: [
      {
        heading: "The engineering problem",
        body: "Analysts need to find specific clauses and dates in lengthy documents. Scanned pages, extraction noise, ambiguous language, and limited context windows can all reduce answer quality.",
      },
      {
        heading: "Design approach",
        body: "The resume describes Azure AI Search, Azure OpenAI, LangChain, and Azure Functions in retrieval-augmented workflows. A useful RAG system must treat extraction, chunking, indexing, retrieval, and response grounding as one evaluated pipeline.",
      },
      {
        heading: "Evaluation and trust",
        body: "Measure retrieval separately from answer quality. Use representative questions, check whether the expected evidence is retrieved, inspect citations, and track latency and failure cases. Keep access decisions outside the language model.",
      },
      {
        heading: "Outcome and evidence",
        body: "The latest resume reports a 40% improvement in retrieval accuracy for document workflows. The metric definition and evaluation set are not independently verified here.",
      },
    ],
    metric: "40% retrieval improvement (resume-reported; metric definition to confirm)",
    mode: ["ai"],
  },
  {
    slug: "full-stack-financial-applications",
    title: "Engineering Secure Full-Stack Enterprise Applications",
    category: "Software Engineering",
    kind: "Professional experience",
    status:
      "August IT · architecture summarized from resume · app specifics require confirmation",
    cardStatus: "August IT · summary from resume",
    summary:
      "A clear separation between user experience, APIs, cloud services, and governed data access.",
    description:
      "A generalized view of the Python services, serverless functions, and React integrations described in the resume.",
    requirements:
      "Keep UI behavior, API contracts, service logic, and data access understandable as separate boundaries; validate and authorize requests at the service layer.",
    contribution:
      "The resume describes Python/Flask REST services, Azure Functions, and React dashboards for data and document workflows. Application-specific ownership is not detailed publicly.",
    tradeoffs:
      "Synchronous APIs simplify immediate feedback; queued or serverless processing can better isolate long-running work but requires explicit status, retry, and failure UX.",
    lessons:
      "A polished interface is only as dependable as the API contract and authorization checks behind it.",
    tags: ["React", "REST APIs", "Python", "Cloud services"],
    stack: [
      "React",
      "Python / Flask",
      "REST APIs",
      "Azure Functions",
      "Azure Storage",
      "Azure DevOps",
    ],
    flow: [
      ["React UI", "User actions and useful feedback"],
      ["API", "Contracts, validation, and authorization"],
      ["Services", "Business logic and asynchronous work"],
      ["Data", "Storage, curated tables, and external systems"],
    ],
    sections: [
      {
        heading: "The engineering problem",
        body: "Enterprise interfaces must make complex workflows understandable without bypassing the security and consistency guarantees of the services behind them.",
      },
      {
        heading: "Design approach",
        body: "The latest resume describes React dashboards integrated with Python and Flask REST services, plus Azure Functions for ingestion and document processing. The diagram is an explanatory pattern, not a verified application-specific deployment map.",
      },
      {
        heading: "Reliability and security",
        body: "Treat API contracts as boundaries: validate inputs, return deliberate errors, enforce authorization server-side, and make long-running work observable. Keep frontend state distinct from durable system state.",
      },
      {
        heading: "Outcome and evidence",
        body: "The resume confirms application and service integration work. Product names, user counts, and measured outcomes are not stated and are intentionally omitted.",
      },
    ],
    mode: ["software", "ai"],
  },
  {
    slug: "secure-event-ingestion",
    title: "Designing Secure Event-Driven File Ingestion",
    category: "Software Engineering",
    kind: "Professional experience",
    status:
      "August IT · Architecture case study · implementation and deployment status need confirmation",
    cardStatus: "August IT · Architecture · status to confirm",
    summary:
      "A defensive event-processing pattern for file workflows with duplicate delivery, retries, and quarantine paths.",
    description:
      "A generalized design discussion based on the supplied project brief; this is not presented as a confirmed production deployment.",
    requirements:
      "Handle duplicate or delayed events, identify file versions, isolate uploaders, and ensure processing does not publish a file before required checks finish.",
    contribution:
      "The supplied brief describes design and debugging topics in this area. The precise implementation, ownership, and deployment status are not confirmed, so this page is explicitly framed as an architecture case study.",
    tradeoffs:
      "Direct event handling is simple but couples the trigger to downstream work. A durable queue improves isolation and retry control, at the cost of explicit state tracking and duplicate-safe consumers.",
    lessons:
      "At-least-once delivery is a system property to design for. Idempotency, quarantine, and fail-closed transitions matter more than assuming every event arrives once.",
    tags: ["Event-driven systems", "Azure", "Idempotency", "Security"],
    stack: [
      "ADLS Gen2",
      "Event Grid",
      "Azure Functions",
      "Queues",
      "Key Vault",
      "Managed identity",
    ],
    flow: [
      ["SFTP", "Authenticated upload boundary"],
      ["Storage", "Isolated file landing area"],
      ["Event", "At-least-once notification"],
      ["Processor", "Idempotent scan and validation"],
      ["Outcome", "Publish, quarantine, or notify"],
    ],
    sections: [
      {
        heading: "The engineering problem",
        body: "File events may be delivered more than once, out of order, or after a transient failure. Security checks and downstream actions must remain correct under retries.",
      },
      {
        heading: "Design approach",
        body: "Correlate processing to a stable file identity and version, validate event provenance, and hand off work through a durable queue. Keep upload, scanning, and publish states explicit.",
      },
      {
        heading: "Reliability and security",
        body: "Make consumers idempotent, bound retries, isolate tenants, and fail closed when validation cannot complete. Infected-file handling and pre-upload controls must not be conflated.",
      },
      {
        heading: "Status",
        body: "This page describes an architecture pattern from the supplied brief. Exact components used, implementation ownership, and production status require confirmation before stronger claims are made.",
      },
    ],
    mode: ["software"],
  },
  {
    slug: "ml-decision-systems",
    title: "Evaluating Machine Learning Decision Systems",
    category: "AI / ML Engineering",
    kind: "Professional experience",
    status:
      "August IT · ML evaluation · interactive threshold illustration uses synthetic data",
    cardStatus: "August IT · ML evaluation · synthetic demo",
    summary:
      "A classification workflow that makes the precision–recall trade-off visible instead of hiding it behind one accuracy number.",
    description:
      "A decision-focused framing for loan pre-approval classification and model evaluation.",
    requirements:
      "Compare model and feature variants while making threshold-dependent false-positive and false-negative behavior explicit. The visualization uses synthetic examples only.",
    contribution:
      "The supplied brief describes Random Forest experiments, feature exclusion, and evaluation at multiple thresholds. Specific ownership and measured model results require confirmation.",
    tradeoffs:
      "Raising a decision threshold generally reduces positive predictions and may reduce false positives while increasing false negatives. The preferred point depends on validated costs and policy—not a desired accuracy label.",
    lessons:
      "A probability estimate, a threshold, and a business decision are distinct. Report each metric with its evaluation population and decision context.",
    tags: ["Scikit-learn", "Classification", "Evaluation", "Responsible ML"],
    stack: [
      "Python",
      "Scikit-learn",
      "Azure Synapse",
      "Delta Lake",
      "Feature engineering",
      "ROC-AUC",
    ],
    flow: [
      ["Features", "Approved, documented inputs"],
      ["Model", "Random Forest classifier"],
      ["Score", "Estimated class probability"],
      ["Threshold", "Decision policy"],
      ["Review", "Metrics and human process"],
    ],
    sections: [
      {
        heading: "The engineering problem",
        body: "A probability score is not a decision. Changing a classification threshold changes the balance of false positives and false negatives, which matters in high-consequence workflows.",
      },
      {
        heading: "Design approach",
        body: "The supplied brief describes Random Forest experiments, feature exclusion, probability thresholds, and metrics including precision, recall, TPR, FPR, ROC-AUC, and confusion matrices.",
      },
      {
        heading: "Evaluation and safety",
        body: "Use a held-out evaluation set, compare thresholds explicitly, and monitor subgroup behavior where appropriate. A 90% threshold is a decision cutoff—not a claim of 90% model accuracy.",
      },
      {
        heading: "Evidence",
        body: "The threshold visualization on this page is synthetic and illustrative. It contains no real financial records and makes no claim about actual model performance.",
      },
    ],
    mode: ["ai"],
  },
  {
    "slug": "governed-ai-agents",
    "title": "Agentic Text-to-SQL for Financial Analytics",
    "category": "AI / ML Engineering",
    "kind": "Professional case study",
    "status": "Software Engineer at August IT · Supporting Farmer Mac",
    "cardStatus": "Featured · August IT / Farmer Mac",
    "featured": true,
    "summary": "I architected a text-to-SQL agent that translates plain-English financial questions into validated SQL queries over an enterprise lakehouse.",
    "description": "As a Software Engineer at August IT supporting Farmer Mac, I designed the agent to retrieve business and schema context before generating SQL, check the query before running it, and summarize the result.",
    "requirements": "I designed the workflow to resolve business terminology, select relevant schemas and views, validate SQL against the selected schema, and execute it through a governed query path. The architecture also supported saving results to Azure Data Lake Storage Gen2.",
    "contribution": "I architected the agent workflow and built a metadata-driven semantic layer connecting business glossary terms and metric definitions with lakehouse schemas, table relationships, and data lineage. I separated SQL generation, validation, and execution into distinct stages.",
    "tradeoffs": "I used metadata retrieval to focus SQL generation on relevant business definitions and schemas. That makes the quality of the semantic layer important: missing definitions or relationships need clarification before a reliable query can be produced.",
    "lessons": "I treated business meaning and query correctness as separate concerns. A query can reference valid columns while answering the wrong business question; retrieving metric definitions before generation helps address that distinction.",
    "tags": [
      "Text-to-SQL",
      "Semantic layer",
      "SQL validation",
      "Financial analytics"
    ],
    "stack": [
      "Python",
      "LangChain",
      "Azure AI Foundry",
      "Azure OpenAI",
      "Azure AI Search",
      "Microsoft Fabric SQL views",
      "Delta Lake",
      "Azure Data Lake Storage Gen2"
    ],
    "flow": [
      [
        "Business question",
        "I interpret the financial question and identify the requested metric, grouping, and period."
      ],
      [
        "Metadata retrieval",
        "I retrieve glossary terms, metric definitions, schemas, relationships, and lineage to select relevant SQL views."
      ],
      [
        "SQL generation",
        "I generate SQL using the selected schema and retrieved business context."
      ],
      [
        "Validation and execution",
        "I check SQL against the selected schema in a separate validation stage, then execute it through a governed query path."
      ],
      [
        "Answer",
        "I summarize the returned results; the architecture also supports saving them to Azure Data Lake Storage Gen2."
      ]
    ],
    "sections": [
      {
        "heading": "The engineering problem",
        "body": "A business question can use familiar financial terms while leaving tables, joins, and metric definitions implicit. I designed the agent to retrieve that missing context before generating SQL and to check the query before running it."
      },
      {
        "heading": "Agent workflow",
        "body": "I designed the workflow to interpret the question, retrieve relevant metadata, select schemas and views, generate and validate SQL, execute through a governed query path, and summarize the result. I also included support in the architecture for saving results to Azure Data Lake Storage Gen2."
      },
      {
        "heading": "Metadata-driven semantic layer",
        "body": "I built a semantic layer connecting business glossary terms and metric definitions to lakehouse schemas, table relationships, and data lineage. This gave the agent context to resolve ambiguous terms, identify relevant datasets, and determine which tables to join."
      },
      {
        "heading": "Query validation and execution",
        "body": "I separated SQL generation, validation, and execution into distinct stages. The validation stage checked generated SQL against the selected schema before the execution stage ran it."
      }
    ],
    "syntheticExample": true,
    "mode": [
      "ai",
      "software"
    ]
  },
  {
    slug: "secure-document-access",
    title: "Designing Secure Enterprise Document Access",
    category: "Software Engineering",
    kind: "Architecture exploration",
    status: "August IT · Architecture discussion · identity integration and deployment need confirmation",
    cardStatus: "August IT · Exploration · status to confirm",
    summary:
      "A document-delivery design that performs authorization at the service boundary rather than trusting a shared link.",
    description:
      "A generalized architecture discussion about portal identity, authorization, and short-lived document access.",
    requirements:
      "Authorize every document request for the current user, keep storage private, and prevent access from being granted by possession of a forwarded or stale link.",
    contribution:
      "The supplied brief describes Salesforce and secure-document delivery architecture topics. Confirmed identity federation, implementation ownership, and deployment details are not asserted.",
    tradeoffs:
      "A service-mediated download provides a clear authorization point but adds a network hop. Short-lived scoped links reduce proxy load but still require a careful issuance and expiration policy.",
    lessons:
      "Authentication proves who is making a request; authorization must still prove that this identity can access this specific document.",
    tags: ["Authorization", "OAuth / OIDC", "Azure", "Secure delivery"],
    stack: [
      "React",
      "Salesforce",
      "Azure API Management",
      "Azure Functions",
      "OAuth / OIDC",
      "Private storage",
    ],
    flow: [
      ["Portal", "Authenticated user session"],
      ["API", "Identity and resource authorization"],
      ["Service", "Scoped document request"],
      ["Storage", "Private object access"],
    ],
    sections: [
      {
        heading: "The engineering problem",
        body: "Document URLs can be forwarded or reused. A user should not gain access to another user's document merely by possessing a link.",
      },
      {
        heading: "Design approach",
        body: "Authenticate at the portal and service boundary, authorize the specific resource for the current user, and only then allow access to private storage through a narrowly scoped, short-lived mechanism.",
      },
      {
        heading: "Identity and authorization considerations",
        body: "Identity federation across a portal and an enterprise identity provider requires explicit issuer, audience, and claim mapping decisions. Salesforce and Entra integration details are intentionally not asserted here.",
      },
      {
        heading: "Status",
        body: "This is an architecture discussion from the supplied brief. Identity configuration, document workflow, implementation ownership, and deployment status require confirmation.",
      },
    ],
    mode: ["software"],
  },
  {
    "slug": "enterprise-knowledge-graph",
    "title": "Connecting Enterprise Data with a Knowledge Graph",
    "category": "AI / ML Engineering",
    "kind": "Professional experience",
    "status": "August IT · Resume-backed professional work",
    "cardStatus": "August IT · Professional case study",
    "summary": "I designed a knowledge graph and semantic layer across approximately 5,000 lakehouse tables to ground AI agents in business meaning.",
    "description": "I designed a knowledge graph and semantic layer across approximately 5,000 lakehouse tables to ground AI agents in business meaning.",
    "contribution": "At August IT, I designed a metadata-driven knowledge graph representing datasets, columns, business concepts, domains, entities, and relationships. I connected business definitions, taxonomies, metrics, and lineage to physical datasets and Microsoft Fabric SQL views.",
    "requirements": "Help agents discover relevant datasets, resolve ambiguous business terms, and infer joins before generating analytical SQL.",
    "tradeoffs": "A semantic layer improves query planning only when its definitions and relationships stay aligned with the underlying datasets. Broad metadata coverage must be balanced with the relevance of the context supplied to an agent.",
    "lessons": "Business definitions and physical schemas need explicit mappings for an agent to answer the intended question.",
    "tags": [
      "Knowledge graph",
      "Semantic layer",
      "Metadata",
      "LLM grounding"
    ],
    "stack": [
      "Python",
      "ADLS Gen2",
      "Delta Lake",
      "Microsoft Fabric",
      "Azure AI Foundry"
    ],
    "flow": [
      [
        "Metadata",
        "Schemas, columns, and lineage"
      ],
      [
        "Business meaning",
        "Definitions, metrics, and domains"
      ],
      [
        "Knowledge graph",
        "Entities and dataset relationships"
      ],
      [
        "Agent context",
        "Dataset discovery and join planning"
      ]
    ],
    "sections": [
      {
        "heading": "The engineering problem",
        "body": "An enterprise lakehouse spans thousands of tables. Schema names alone do not explain business metrics or which datasets belong together."
      },
      {
        "heading": "Semantic mappings",
        "body": "I designed mappings across ADLS Delta Lake datasets, Microsoft Fabric SQL views, enterprise metadata, and knowledge graph entities to support grounded analytical queries."
      },
      {
        "heading": "Scope",
        "body": "The resume describes a lakehouse containing approximately 5,000 tables. This is the metadata scope, rather than a query-accuracy or performance measure."
      }
    ],
    "mode": [
      "software",
      "ai"
    ]
  },
  {
    "slug": "secure-enterprise-agent-tools",
    "title": "Building Secure MCP Tools for Enterprise Agents",
    "category": "AI / ML Engineering",
    "kind": "Professional experience",
    "status": "August IT · Resume-backed professional work",
    "cardStatus": "August IT · Professional case study",
    "summary": "I designed reusable MCP and tool-calling interfaces for controlled access to enterprise data, search, and reporting services.",
    "description": "I designed reusable MCP and tool-calling interfaces for controlled access to enterprise data, search, and reporting services.",
    "contribution": "At August IT, I designed MCP interfaces for Azure AI Foundry agents to access ADLS, SQL analytics endpoints, Azure AI Search, knowledge graph services, and reporting systems. I engineered service integrations using Microsoft Entra ID, Managed Identity, RBAC, and Key Vault.",
    "requirements": "Give agents reusable access to enterprise services through controlled tools and authenticated service-to-service integrations.",
    "tradeoffs": "Reusable tools simplify agent workflows, but each interface needs clear permissions and a well-defined scope. Authorization must be enforced by the service handling the request.",
    "lessons": "Tool availability and permission to access a resource are separate concerns; secure integration requires both.",
    "tags": [
      "MCP",
      "Tool calling",
      "Managed Identity",
      "RBAC"
    ],
    "stack": [
      "Python",
      "Azure AI Foundry",
      "MCP",
      "Microsoft Entra ID",
      "Key Vault",
      "Azure DevOps",
      "Docker"
    ],
    "flow": [
      [
        "Agent",
        "Select a task-specific tool"
      ],
      [
        "Tool interface",
        "Reusable MCP and service contracts"
      ],
      [
        "Identity",
        "Managed Identity and RBAC"
      ],
      [
        "Enterprise services",
        "Data, search, knowledge graph, reporting"
      ]
    ],
    "sections": [
      {
        "heading": "The engineering problem",
        "body": "Agents need access to multiple enterprise systems while preserving the access controls of each service."
      },
      {
        "heading": "Controlled integrations",
        "body": "I designed reusable tools spanning storage, SQL analytics, search, knowledge graph services, and reporting, backed by secure service-to-service integrations."
      },
      {
        "heading": "Deployment workflow",
        "body": "I automated unit-tested deployments across environments using Azure DevOps CI/CD, Docker, and Git."
      }
    ],
    "mode": [
      "software",
      "ai"
    ]
  },
  {
    "slug": "samsung-audio-source-separation",
    "title": "Separating Audio Sources with Deep Learning",
    "category": "AI / ML Engineering",
    "kind": "Professional experience",
    "status": "Samsung · Software Engineer Intern · May–November 2021",
    "cardStatus": "Samsung · Audio ML & GPU inference",
    "summary": "I developed an audio source-separation system to isolate vocals, music, and percussion from mixed audio using TensorFlow, U-Net, and spectrogram-based processing.",
    "description": "During my software engineering internship at Samsung, I worked on audio preprocessing, model evaluation, and GPU inference optimization for source separation.",
    "requirements": "Separate overlapping sources in mixed audio and evaluate model architectures across diverse samples using consistent preprocessing and frequency-domain features.",
    "contribution": "I developed the source-separation system with TensorFlow, U-Net architectures, and Librosa. I built preprocessing and frequency-domain feature pipelines, evaluated architectures on mixed-audio samples, and optimized low-level kernels for GPU inference throughput.",
    "tradeoffs": "Spectrogram-based modeling makes frequency structure available to the network, while preprocessing choices affect the detail represented in each example. Model quality and inference throughput need to be assessed together when comparing architectures.",
    "lessons": "Audio preprocessing, model architecture, and inference performance are connected parts of the same system. Evaluating diverse mixtures helps reveal behavior that a single example cannot show.",
    "tags": [
      "Audio ML",
      "U-Net",
      "TensorFlow",
      "GPU inference"
    ],
    "stack": [
      "Python",
      "TensorFlow",
      "U-Net",
      "Librosa",
      "Spectrograms",
      "GPU inference"
    ],
    "flow": [
      [
        "Mixed audio",
        "Overlapping vocals, music, and percussion"
      ],
      [
        "Preprocessing",
        "Audio preparation and frequency-domain features"
      ],
      [
        "Spectrograms",
        "Time-frequency representations"
      ],
      [
        "U-Net",
        "Learned source separation"
      ],
      [
        "Evaluation",
        "Compare architectures and inference throughput"
      ]
    ],
    "sections": [
      {
        "heading": "The engineering problem",
        "body": "Mixed audio contains overlapping sources. A separation model must distinguish their time-frequency patterns across varied recordings."
      },
      {
        "heading": "Preprocessing and modeling",
        "body": "I built preprocessing and frequency-domain feature pipelines with Librosa and developed TensorFlow U-Net models for spectrogram-based source separation."
      },
      {
        "heading": "Evaluation and inference",
        "body": "I evaluated model architectures across diverse mixed-audio samples and optimized low-level kernels for GPU inference throughput. The resume does not report a numerical quality or throughput improvement."
      }
    ],
    "mode": [
      "ai"
    ]
  }
];

export const publicProjects = [
  {
    id: "ashtadhyayi-mcp",
    title: "Ashtadhyayi MCP",
    type: "In progress · Sanskrit retrieval & agent tooling",
    description:
      "An independent, read-only MCP server that helps agents retrieve Sanskrit sutras, roots, word forms, and commentary with source provenance.",
    details:
      "Built on scholarly data from Ashtadhyayi.com by Neelesh Bodas and contributors. Local tools and HTTP access are implemented; public HTTPS deployment and broader evaluation are still in progress.",
    useCase: [
      {
        heading: "Ground answers in source material",
        body: "An agent can look up a sutra or stored word form and return the original text with attribution and revision information. Roman Sanskrit queries help users find sources without a Sanskrit keyboard.",
      },
      {
        heading: "Current scope",
        body: "The reference agent verifies quotations against retrieved sources and withholds unverified generated explanations by default. This project retrieves scholarly material; it does not implement a Sanskrit grammar engine. Initial smoke evaluation is not a claim of general Sanskrit reasoning accuracy.",
      },
    ],
    stack: ["Python", "MCP", "Ollama", "Source provenance"],
    url: "https://github.com/avulaankith/AstadhyayiMCP",
    image: "/images/ashtadhyayi-mcp.png",
    imageAlt: "Concept illustration of Sanskrit manuscripts connected to search and source-verification nodes",
  },
  {
    id: "sandhi-ninja",
    title: "Sandhi Ninja",
    description:
      "I built Sandhi Ninja for fun: a Sanskrit learning game where players split compounds, join words, and test their timing in an arcade slicing mode.",
    details:
      "Use case: give Sanskrit learners a playful way to practice sandhi, with feedback that explains both the rule and the correct word boundary. Learn, Practice, and Challenge sessions support different levels of help, with English, Sanskrit, and Telugu interfaces.",
    useCase: [
      {
        heading: "From practice to play",
        body: "A learner chooses a sandhi family, identifies the rule, and splits or joins a word. Feedback distinguishes a misplaced boundary from an incorrect rule, while hints and answer reveals help explain the next attempt. Ninja Slice adds a faster, timing-based variation.",
      },
      {
        heading: "Engineering behind the game",
        body: "React and TypeScript manage the learning interface, with Phaser powering the arcade mode. Shared sandhi rules and Sanskrit text utilities connect the practice experience to a rule-based analysis API, which normalizes IAST, Devanagari, and Telugu input and returns ranked vowel-sandhi splits.",
      },
      {
        heading: "A deliberate scope",
        body: "The game uses a built-in practice bank. The separate analyzer focuses on vowel sandhi and does not validate candidates against a dictionary or morphology database. This keeps the learning experience grounded in explicit rules while leaving room to explore more language tooling.",
      },
    ],
    stack: ["React", "TypeScript", "Phaser", "Node.js"],
    url: "https://github.com/avulaankith/SandhiNinja",
    demoUrl: "https://sandhi-ninja.vercel.app",
    image: "/images/sandhi-ninja.svg",
    imageFit: "contain",
    type: "Built for fun · Sanskrit learning game",
  },
  {
    title: "AutoBuilder",
    description:
      "A local-first software-building system using a LangGraph state graph to coordinate research, architecture, implementation, evaluation, critique, and memory agents.",
    details:
      "The public repository documents a Python CLI, SQLite-backed state/checkpoints, configurable LLM providers, and unit tests. It requires a configured provider for model-backed runs.",
    stack: ["Python", "LangGraph", "SQLite", "Pytest"],
    url: "https://github.com/avulaankith/autonomous-builder",
    image: null,
    type: "Agent system · local-first",
  },
  {
    title: "ATS Resume Scorer",
    description:
      "A Streamlit app that accepts a resume and job description and produces keyword and profile feedback using Google Gemini.",
    details:
      "The repository contains the Streamlit application and dependency list. It is a web app source project; this portfolio does not claim a live deployment.",
    stack: ["Python", "Streamlit", "Gemini API", "PDF parsing"],
    url: "https://github.com/avulaankith/ATS-Resume-Scorer",
    image: "/images/ats_resume_scorer.jpg",
    type: "Generative AI · application source",
  },
  {
    id: "ocular-disease-detection",
    title: "Ocular Disease Detection",
    description:
      "A Flask application and VGG-16 notebook project focused on cataract prediction from an ocular-disease dataset.",
    details:
      "The public repository includes Flask app code, templates, static files, and training notebooks. It references an externally hosted model file; no live demo is claimed.",
    stack: ["Python", "Flask", "TensorFlow / Keras", "VGG-16"],
    url: "https://github.com/avulaankith/Ocular-Disease-Detection-Web-Application",
    image: "/images/eye.jpeg",
    type: "Computer vision · application source",
  },
  {
    id: "highway-lane-segmentation",
    title: "Highway Lane Segmentation",
    description:
      "A notebook-based lane-segmentation project using a U-Net architecture and a highway-lane dataset.",
    details:
      "The repository currently exposes a Jupyter notebook and dataset-oriented materials. It is not presented as a deployed driving system.",
    stack: ["Python", "PyTorch", "U-Net", "Computer vision"],
    url: "https://github.com/avulaankith/Highway-lane-segmentation",
    image: "/images/highway_lane_segmentation.png",
    type: "Computer vision · notebook",
  },
];

export const experience = [
  {
    company: "August IT",
    role: "Data and AI Software Engineer",
    dates: "April 2025 — Present",
    note: "Supporting Farmer Mac · Enterprise data platforms and AI services",
    bullets: [
      "Build and deploy Python AI services and REST APIs with Azure AI Foundry, Azure OpenAI, Azure AI Search, and LangChain for retrieval-augmented generation and financial analytics, improving retrieval accuracy by 40% over baseline in offline evaluations.",
      "Architect multi-agent text-to-SQL workflows that separate planning, metadata and schema discovery, SQL generation, validation, governed execution, and response generation.",
      "Design a knowledge graph and semantic layer across approximately 5,000 lakehouse tables, connecting business definitions, dataset relationships, and lineage to ground agent query planning.",
      "Optimize PySpark and Spark SQL pipelines across ADLS Gen2, Databricks, Delta Lake, Azure Data Factory, and Synapse using partitioning, broadcast joins, predicate pushdown, and Adaptive Query Execution, reducing end-to-end processing latency by 35% versus the prior implementation.",
      "Design reusable MCP tools for controlled access to ADLS, SQL analytics, Azure AI Search, knowledge graph services, and reporting systems.",
      "Secure service integrations with Microsoft Entra ID, Managed Identity, RBAC, and Key Vault; automate tested deployments across environments with Azure DevOps, Docker, and Git.",
    ],
    technologies: ["Python", "REST APIs", "Azure AI Foundry", "Azure OpenAI", "Azure AI Search", "LangChain", "MCP", "PySpark / Spark SQL", "Databricks", "Delta Lake", "Microsoft Fabric", "Azure DevOps"],
    logo: "/images/August%20IT%20Logo.webp",
  },
  {
    company: "Astrosoft Technologies",
    role: "Data and AI Software Engineer",
    dates: "January 2025 — April 2025",
    note: "Computer vision and ML data pipelines",
    bullets: [
      "Trained and evaluated Vision Transformer and hybrid CNN–Transformer models in PyTorch for spatial modeling.",
      "Developed reusable preprocessing, feature-engineering, and GPU-enabled training pipelines with Azure ML and Databricks, supporting model training and inference workflows.",
      "Implemented governed access to model-ready datasets and ML assets with Unity Catalog and RBAC, using Git and version-controlled development workflows.",
    ],
    technologies: ["Python", "PyTorch", "Vision Transformers", "CNNs", "Azure ML", "Databricks", "Unity Catalog", "RBAC", "Git"],
    logo: "/images/Astrosoft%20Technologies%20Logo.jpeg",
  },
  {
    company: "University of Texas at Arlington",
    role: "Software Engineer",
    dates: "August 2023 — January 2025",
    note: "RAG applications and backend retrieval",
    bullets: [
      "Built a Retrieval-Augmented Generation application with Python, LangChain, PostgreSQL, and API services to provide semantic search across academic and administrative documents.",
      "Developed backend retrieval and query-processing components that grounded LLM responses in retrieved source context for faculty, staff, and students.",
    ],
    technologies: ["Python", "LangChain", "PostgreSQL", "API services", "RAG", "Semantic search"],
    logo: "/images/cseuta_logo.jpeg",
  },
  {
    company: "Samsung",
    role: "Software Engineer Intern",
    dates: "May 2021 — November 2021",
    note: "Audio ML and GPU inference",
    bullets: [
      "Developed an audio source-separation system using TensorFlow, U-Net architectures, Librosa, and spectrogram-based signal processing to isolate vocals, music, and percussion from mixed audio.",
      "Built preprocessing and frequency-domain feature pipelines, and evaluated model architectures across diverse mixed-audio samples.",
      "Optimized low-level kernels for GPU inference throughput.",
    ],
    technologies: ["Python", "TensorFlow", "U-Net", "Librosa", "Spectrograms", "GPU inference"],
    logo: "/images/Samsung-Logo728_410.jpg",
  },
];

export const skillGroups = [
  {
    name: "Software engineering",
    skills: ["Python", "JavaScript", "React", "REST APIs", "Flask", "SQL", "Git"],
  },
  {
    name: "Cloud and data platforms",
    skills: [
      "Azure",
      "ADLS Gen2",
      "Azure Functions",
      "Data Factory",
      "Synapse",
      "Spark",
      "Delta Lake",
    ],
  },
  {
    name: "AI and machine learning",
    skills: [
      "RAG",
      "LangChain",
      "Azure AI Search",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Model evaluation",
    ],
  },
  {
    name: "Reliability and delivery",
    skills: [
      "CI/CD",
      "Data validation",
      "Idempotent processing",
      "Observability",
      "Access control",
      "Distributed systems",
    ],
  },
];
