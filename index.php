<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project</title>
   <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
       <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col mb-5 ">
    <div class="text-center lg:text-center">
      <h1 class="text-5xl font-bold text-bold mb-5">Personal Information</h1>
     
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">


                    <form action="submit.php" method="POST">

                        <fieldset class="fieldset">

                            <!-- Division Dropdown -->
                            <label class="label" id="divisionDropdown">Bangladesh Division</label>
                            <details class="dropdown" id="divisionBox">
                                <summary class="btn m-1 w-80" id="divisionSummary">Division</summary>
                                <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" id="divisionList">
                                    <?php include 'sql.php'; ?> <!-- Division list -->
                                </ul>
                            </details>

                            <!-- District Dropdown -->
                            <label class="label" id="districtDropdown">Bangladesh District</label>
                            <details class="dropdown" id="districtBox">
                                <summary class="btn m-1 w-80" id="districtSummary">District</summary>
                                <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" id="districtList">
                                    <li><a>Select division first</a></li>
                                </ul>
                            </details>

                            <!-- Sub-district Dropdown -->
                            <label class="label">Bangladesh Sub-district</label>
                            <details class="dropdown" id="subdistrictBox">
                                <summary class="btn m-1 w-80" id="subdistrictSummary">Sub-district</summary>
                                <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" id="subdistrictList">
                                    <li><a>Select district first</a></li>
                                </ul>
                            </details>

                            <button class="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
