<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ["name", "description", "frequency", "start_date", "end_date", "last_extraction", "nr_bots", "nr_dataset_created", "nr_record_extracted"];
}
