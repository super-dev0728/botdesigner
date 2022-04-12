<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class projectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::orderBy('updated_at', 'DESC')->get();
        return response() -> json(['status' => 200, 'projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // print_r($request); die;
        $newProject = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'frequency' => $request->frequency,
            'status' => 1,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'last_extraction' => null,
            'nr_bots' => 0,
            'nr_dataset_created' => 0,
            'nr_record_extracted' => 0
        ]);
        if($newProject){
            return response()->json([
                "project" => $newProject,
                "status" => 200
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $projects = Project::find($id);
        return response()->json(['status' => 200, 'projects' => $projects]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $projects = Project::find($id);
        return response()->json(['status' => 200, 'projects' => $projects]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $projects = Project::find($id);
        $projects->name = $request->name;
        $projects->description = $request->description;
        $projects->frequency = $request->frequency;
        $projects->start_date = $request->start_date;
        $projects->end_date = $request->end_date;
        if($projects -> save()) {
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $projects = Project::findOrFail($id);
        if($projects -> delete()){
            return response()->json(["status" => 200]);
        }
    }
}
